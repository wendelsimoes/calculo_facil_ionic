import { Component, OnInit } from '@angular/core';
import DerivativeChallengeService from 'src/services/derivate-challenge-service';
import DerivativeChallenge from 'src/shared/derivative-challenge';

@Component({
  selector: 'app-place-derivatives',
  templateUrl: './place-derivatives.component.html',
  styleUrls: ['./place-derivatives.component.scss'],
})
export class PlaceDerivativesComponent implements OnInit {

  currentChallenges: DerivativeChallenge[] = [];
  currentChallengesMonomials: string[] = [];

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
    this.currentChallenges = [challenge1, challenge2, challenge3];
  }

  ngOnInit() {
    this.setCurrentChallenges();
  }

}
