import { Component, OnInit } from '@angular/core';
import UndefinedLimitChallengeService from 'src/services/undefined-limit-challenge-service';
import UndefinedLimitChallenge from 'src/shared/undefined-limit-challenge';

@Component({
  selector: 'app-undefined-limits',
  templateUrl: './undefined-limits.component.html',
  styleUrls: ['./undefined-limits.component.scss'],
})
export class UndefinedLimitsComponent implements OnInit {

  allChallenges: UndefinedLimitChallenge[] = [];
  remainderChallenges: UndefinedLimitChallenge[] = [];
  currentChallenge!: UndefinedLimitChallenge;
  randomChallenge!: UndefinedLimitChallenge;
  correctAnswerIndex: number = 0;
  currentStep: number = 1;
  points: number = 0;
  answerSubmited: boolean = false;
  paused: boolean = false;

  constructor(private undefinedLimitChallengeService: UndefinedLimitChallengeService) { }

  setRandomCurrentChallenge() {
    let remainderChallengesLength: number = this.remainderChallenges.length;

    if (remainderChallengesLength <= 0) {
      this.remainderChallenges = [...this.allChallenges];
      remainderChallengesLength = this.remainderChallenges.length;
    }

    const randomIndex: number = Math.floor(Math.random() * remainderChallengesLength);
    this.currentChallenge = this.remainderChallenges[randomIndex];
    this.remainderChallenges.splice(randomIndex, 1);

    this.setRandomWrongChallenge();

    const randomCorrectAnswerIndex: number = Math.floor(Math.random() * 2);
    this.correctAnswerIndex = randomCorrectAnswerIndex;
  }

  setRandomWrongChallenge() {
    const allChallengesLength: number = this.allChallenges.length;
    let randomIndexAllChallenges: number = Math.floor(Math.random() * allChallengesLength);
    while (this.currentChallenge === this.allChallenges[randomIndexAllChallenges]) {
      randomIndexAllChallenges = Math.floor(Math.random() * allChallengesLength);
    }
    this.randomChallenge = { ...this.allChallenges[randomIndexAllChallenges] };

    const currentChallengeTo = this.currentChallenge.challenge.match(RegExp(/to-?\d+/));
    if (currentChallengeTo !== null) {
      const randomChallengeStep1To = this.randomChallenge.step1.match(RegExp(/to-?\d+/));
      if (randomChallengeStep1To !== null) {
        this.randomChallenge.step1 = this.randomChallenge.step1.replace(randomChallengeStep1To[0], currentChallengeTo[0]);
      }

      const randomChallengeStep2To = this.randomChallenge.step2.match(RegExp(/to-?\d+/));
      if (randomChallengeStep2To !== null) {
        this.randomChallenge.step2 = this.randomChallenge.step2.replace(randomChallengeStep2To[0], currentChallengeTo[0]);
      }
    }
  }

  runOnDelay(func: Function, seconds: number) {
    setTimeout(() => {
      func();
    }, seconds * 1000)
  }

  playCorrectAnswerAudio() {
    const audio = new Audio('../../assets/audio/correct_answer_audio.mp3');
    audio.load();
    audio.play();
  }

  playWrongAnswerAudio() {
    const audio = new Audio('../../assets/audio/wrong_answer_audio.mp3');
    audio.load();
    audio.play();
  }

  submitAnswer(index: number) {
    if (this.correctAnswerIndex === index) {
      this.playCorrectAnswerAudio();
    } else {
      this.playWrongAnswerAudio();
    }

    this.answerSubmited = true;
    this.runOnDelay(() => {
      if (this.correctAnswerIndex === index) {
        this.points += 10;

        if (this.currentStep === 3) {
          this.currentStep = 1;
          this.setRandomCurrentChallenge();
        } else {
          this.currentStep += 1;
          this.setRandomWrongChallenge();
          const randomCorrectAnswerIndex: number = Math.floor(Math.random() * 2);
          this.correctAnswerIndex = randomCorrectAnswerIndex;
        }
      } else {
        this.points = 0;
        this.currentStep = 1;
        this.setRandomCurrentChallenge();
      }
      this.answerSubmited = false;
    }, 1);
  }

  switchPaused() {
    this.paused = !this.paused;
  }

  ngOnInit() {
    this.allChallenges = this.undefinedLimitChallengeService.getAllUndefinedLimitChallenges();
    this.remainderChallenges = [...this.allChallenges];
    this.setRandomCurrentChallenge();
  }

}
