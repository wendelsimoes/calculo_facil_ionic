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

    const allChallengesLength: number = this.allChallenges.length;
    let randomIndexAllChallenges: number = Math.floor(Math.random() * allChallengesLength);
    while (this.currentChallenge === this.allChallenges[randomIndexAllChallenges]) {
      randomIndexAllChallenges = Math.floor(Math.random() * allChallengesLength);
    }
    this.randomChallenge = this.allChallenges[randomIndexAllChallenges];

    const randomCorrectAnswerIndex: number = Math.floor(Math.random() * 2);
    this.correctAnswerIndex = randomCorrectAnswerIndex;
  }

  ngOnInit() {
    this.allChallenges = this.undefinedLimitChallengeService.getAllUndefinedLimitChallenges();
    this.remainderChallenges = [...this.allChallenges];
    this.setRandomCurrentChallenge();
  }

}
