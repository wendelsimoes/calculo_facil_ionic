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

  cordsAnimation = setInterval(() => {
    this.leftQueue.forEach((item: GuitarQueue) => {
      item.order += 1;
    });
    this.middleQueue.forEach((item: GuitarQueue) => {
      item.order += 1;
    });
    this.rightQueue.forEach((item: GuitarQueue) => {
      item.order += 1;
    });
  }, 250);

  eachSecond = setInterval(() => {
    this.songDuration -= 1;
    const randomDelay = Math.floor(Math.random() * 4) + 3;
    if (Math.floor(this.songDuration) % randomDelay === 0) {
      const randomIndex: number = Math.floor(Math.random() * 3);
      if (this.expressionsQueue.length > 0) {
        const pair = this.expressionsQueue.shift();
        switch (randomIndex) {
          case 0:
            if (pair !== undefined) {
              this.leftQueue.push({ derivativePair: pair, order: 0 });
            }
            break;
          case 1:
            if (pair !== undefined) {
              this.middleQueue.push({ derivativePair: pair, order: 0 });
            }
            break;
          case 2:
            if (pair !== undefined) {
              this.rightQueue.push({ derivativePair: pair, order: 0 });
            }
            break;
          default:
            break;
        }
      }
    }
  }, 1000);

  constructor(private derivativePairService: DerivativePairService) { }

  configureLevel() {
    const audio = new Audio('../../assets/audio/songs/no-copy-1.mp3');
    audio.onloadedmetadata = (e: any) => {
      const songDuration: number = e.currentTarget.duration;
      const totalLevelExpressions: number = songDuration / 10;
      const totalExpressions: number = this.derivativePairs.length;
      for (let i = 0; i < totalLevelExpressions; i++) {
        this.expressionsQueue.push(this.derivativePairs[Math.floor(Math.random() * totalExpressions)]);
      }
      this.songDuration = songDuration;
    };
    audio.load();
    audio.play();
  }


  ngOnInit() {
    this.numbers = Array(100).fill(0).map((x, i) => i);
    this.derivativePairs = this.derivativePairService.getAllDerivativePairs();
    this.configureLevel();
  }

}
