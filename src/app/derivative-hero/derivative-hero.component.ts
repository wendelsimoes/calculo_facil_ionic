import { Component, OnInit } from '@angular/core';
import DerivativePairService from 'src/services/derivative-pair-service';
import DerivativePair from 'src/shared/derivative-pair';
import GuitarQueue from './guitar-queue';

@Component({
  selector: 'app-derivative-hero',
  templateUrl: './derivative-hero.component.html',
  styleUrls: ['./derivative-hero.component.scss'],
})
export class DerivativeHeroComponent implements OnInit {

  numbers: number[] = [];
  songDuration: number = 0;
  derivativePairs: DerivativePair[] = [];
  expressionsQueue: DerivativePair[] = [];
  leftQueue: GuitarQueue[] = [];
  middleQueue: GuitarQueue[] = [];
  rightQueue: GuitarQueue[] = [];
  buttonDerivative1!: string;
  buttonDerivative2!: string;
  buttonDerivative3!: string;

  animation = setInterval(() => {
    this.songDuration -= 0.05;
    this.leftQueue.forEach((item: GuitarQueue) => {
      item.top += 1.75;
    });
    this.middleQueue.forEach((item: GuitarQueue) => {
      item.top += 1.75;
    });
    this.rightQueue.forEach((item: GuitarQueue) => {
      item.top += 1.75;
    });
  }, 50);

  newExpressionInterval = setInterval(() => {
    if (this.songDuration < 10) {
      clearInterval(this.newExpressionInterval);
    }

    const randomBoolean = Math.random() < 0.5;
    if (randomBoolean) {
      const randomIndex: number = Math.floor(Math.random() * 3);
      if (this.expressionsQueue.length > 0) {
        const pair = this.expressionsQueue.shift();
        switch (randomIndex) {
          case 0:
            if (pair !== undefined) {
              this.leftQueue.push({ derivativePair: pair, top: 0 });
            }
            break;
          case 1:
            if (pair !== undefined) {
              this.middleQueue.push({ derivativePair: pair, top: 0 });
            }
            break;
          case 2:
            if (pair !== undefined) {
              this.rightQueue.push({ derivativePair: pair, top: 0 });
            }
            break;
          default:
            break;
        }
      }
    }
  }, 3000);

  constructor(private derivativePairService: DerivativePairService) { }

  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  configureLevel() {
    this.derivativePairs = this.derivativePairService.getAllDerivativePairs();
    const audio = new Audio('../../assets/audio/songs/no-copy-1.mp3');
    audio.onloadedmetadata = (e: any) => {
      const songDuration: number = e.currentTarget.duration;
      const totalLevelExpressions: number = songDuration / 10;
      const totalExpressions: number = this.derivativePairs.length;
      for (let i = 0; i < totalLevelExpressions; i++) {
        this.expressionsQueue.push(this.derivativePairs[Math.floor(Math.random() * totalExpressions)]);
      }
      this.songDuration = songDuration;
      this.shuffleArray(this.expressionsQueue);
    };
    audio.load();
    audio.play();
  }


  ngOnInit() {
    this.configureLevel();
  }

}
