import { Component, OnInit } from '@angular/core';
import DerivativeChallengeService from 'src/services/derivate-challenge-service';
import DerivativeChallenge from 'src/shared/derivative-challenge';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-place-derivatives',
  templateUrl: './place-derivatives.component.html',
  styleUrls: ['./place-derivatives.component.scss'],
})
export class PlaceDerivativesComponent implements OnInit {

  currentChallenge1!: DerivativeChallenge;
  currentChallenge2!: DerivativeChallenge;
  currentChallenge3!: DerivativeChallenge;

  currentChallenge1Monomials: string[] = ['f\'='];
  currentChallenge2Monomials: string[] = ['f\'='];
  currentChallenge3Monomials: string[] = ['f\'='];

  currentChallengesMonomials: string[] = [];

  level: number = 1;
  levelEnded: boolean = false;

  constructor(private derivativeChallengeService: DerivativeChallengeService) { }

  shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  setCurrentChallenges() {
    const challenges: DerivativeChallenge[] = this.derivativeChallengeService.getAllDerivativeChallenges();
    const challengesLength: number = challenges.length;
    const randomIndex1: number = Math.floor(Math.random() * challengesLength);
    let randomIndex2: number = Math.floor(Math.random() * challengesLength);
    while (randomIndex2 === randomIndex1) {
      randomIndex2 = Math.floor(Math.random() * challengesLength);
    }
    let randomIndex3: number = Math.floor(Math.random() * challengesLength);
    while (randomIndex3 === randomIndex1 || randomIndex3 === randomIndex2) {
      randomIndex3 = Math.floor(Math.random() * challengesLength);
    }


    const challenge1: DerivativeChallenge = challenges[randomIndex1];
    const challenge2: DerivativeChallenge = challenges[randomIndex2];
    const challenge3: DerivativeChallenge = challenges[randomIndex3];

    const monomials: string[] = [...challenge1.answerMonomials, ...challenge2.answerMonomials, ...challenge3.answerMonomials];
    this.shuffleArray(monomials);
    this.currentChallengesMonomials = monomials;
    this.currentChallenge1 = { ...challenge1 };
    this.currentChallenge2 = { ...challenge2 };
    this.currentChallenge3 = { ...challenge3 };
  }

  newLevel() {
    this.levelEnded = !this.levelEnded;
    this.currentChallenge1Monomials = ['f\'='];
    this.currentChallenge2Monomials = ['f\'='];
    this.currentChallenge3Monomials = ['f\'='];
    this.currentChallengesMonomials = [];
    this.setCurrentChallenges();
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

  playGameCompletionAudio() {
    const audio = new Audio('../../assets/audio/game_completion_audio.mp3');
    audio.load();
    audio.play();
  }

  checkForLevelEnd() {
    if (this.currentChallengesMonomials.length <= 0) {
      this.playGameCompletionAudio();
      this.level += 1;
      this.levelEnded = true;
    }
  }


  drop(event: CdkDragDrop<string[]>, containerIndex: number) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const challenge: DerivativeChallenge = containerIndex === 1 ? this.currentChallenge1 :
        containerIndex === 2 ? this.currentChallenge2 : this.currentChallenge3;

      if (challenge.answerMonomials[event.container.data.length - 1] === event.previousContainer.data[event.previousIndex]) {
        this.playCorrectAnswerAudio();
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.container.data.length,
        );
      } else {
        this.playWrongAnswerAudio();
        moveItemInArray(event.previousContainer.data, event.previousIndex, event.currentIndex);
      }

      this.checkForLevelEnd();
    }
  }

  ngOnInit() {
    this.setCurrentChallenges();
  }

}
