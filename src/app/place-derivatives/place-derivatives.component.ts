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

  constructor(private derivativeChallengeService: DerivativeChallengeService) { }

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

    this.currentChallenges = [challenges[randomIndex1], challenges[randomIndex2], challenges[randomIndex3]];
  }

  ngOnInit() {
    this.setCurrentChallenges();
  }

}
