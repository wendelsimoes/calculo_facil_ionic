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
  buttonDerivative1: string = "";
  buttonDerivative2: string = "";
  buttonDerivative3: string = "";
  currentSong!: HTMLAudioElement;
  fourthInQueue: any;

  fireEffect1: boolean = false;
  fireEffect2: boolean = false;
  fireEffect3: boolean = false;

  playWrongAnswerAudio() {
    const audio = new Audio('../../assets/audio/wrong-guitar-note.mp3');
    audio.load();
    audio.play();
  }

  trackAnimation = setInterval(() => {
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

    let bottomMostDerivative = "temp";

    const bottomMostLeft = this.leftQueue[0];
    if (bottomMostLeft !== null && bottomMostLeft !== undefined) {
      if (bottomMostLeft.top >= 725) {
        bottomMostDerivative = this.leftQueue[0].derivativePair.derivative;
        this.leftQueue.shift();
      }
    }

    const bottomMostMiddle = this.middleQueue[0];
    if (bottomMostMiddle !== null && bottomMostMiddle !== undefined) {
      if (bottomMostMiddle.top >= 725) {
        bottomMostDerivative = this.middleQueue[0].derivativePair.derivative;
        this.middleQueue.shift();
      }
    }

    const bottomMostRight = this.rightQueue[0];
    if (bottomMostRight !== null && bottomMostRight !== undefined) {
      if (bottomMostRight.top >= 725) {
        bottomMostDerivative = this.rightQueue[0].derivativePair.derivative;
        this.rightQueue.shift();
      }
    }

    if (bottomMostDerivative === this.buttonDerivative1) {
      this.buttonDerivative1 = this.fourthInQueue.derivative;
      this.fourthInQueue = this.expressionsQueue[this.expressionsQueue.indexOf(this.fourthInQueue) + 1];
    } else if (bottomMostDerivative === this.buttonDerivative2) {
      this.buttonDerivative2 = this.fourthInQueue.derivative;
      this.fourthInQueue = this.expressionsQueue[this.expressionsQueue.indexOf(this.fourthInQueue) + 1];
    } else if (bottomMostDerivative === this.buttonDerivative3) {
      this.buttonDerivative3 = this.fourthInQueue.derivative;
      this.fourthInQueue = this.expressionsQueue[this.expressionsQueue.indexOf(this.fourthInQueue) + 1];
    }
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
  }, 4000);

  constructor(private derivativePairService: DerivativePairService) { }

  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  submitAnswer(buttonIndex: number, derivative: string) {
    const bottomMostExpressions = [this.leftQueue[0], this.middleQueue[0], this.rightQueue[0]];
    bottomMostExpressions.forEach((item, i) => {
      if (item !== null && item !== undefined) {
        if (item.top >= 600) {
          if (item.derivativePair.derivative === derivative) {
            switch (buttonIndex) {
              case 1:
                this.buttonDerivative1 = this.fourthInQueue.derivative;
                break;
              case 2:
                this.buttonDerivative2 = this.fourthInQueue.derivative;
                break;
              case 3:
                this.buttonDerivative3 = this.fourthInQueue.derivative;
                break;
              default:
                break;
            }

            this.fourthInQueue = this.expressionsQueue[this.expressionsQueue.indexOf(this.fourthInQueue) + 1];

            switch (i) {
              case 0:
                this.leftQueue.shift();
                this.fireEffect1 = true;
                break;
              case 1:
                this.middleQueue.shift();
                this.fireEffect2 = true;
                break;
              case 2:
                this.rightQueue.shift();
                this.fireEffect3 = true;
                break;
              default:
                break;
            }

            const hideFire = setTimeout(() => {
              this.fireEffect1 = false;
              this.fireEffect2 = false;
              this.fireEffect3 = false;
              clearTimeout(hideFire);
            }, 500);
          } else {
            this.currentSong.pause();
            this.playWrongAnswerAudio();
            const playTimeout = setTimeout(() => {
              this.currentSong.play();
              clearTimeout(playTimeout);
            }, 500);
          }
        }
      }
    });
  }

  configureLevel() {
    this.derivativePairs = this.derivativePairService.getAllDerivativePairs();
    const audio = new Audio('../../assets/audio/songs/no-copy-1.mp3');
    audio.onloadedmetadata = (e: any) => {
      const songDuration: number = e.currentTarget.duration;
      this.songDuration = songDuration;
      this.expressionsQueue = [...this.derivativePairs];
      this.shuffleArray(this.expressionsQueue);
      const randomIndex: number = Math.floor(Math.random() * 3);
      switch (randomIndex) {
        case 0:
          this.buttonDerivative1 = this.expressionsQueue[0].derivative;
          this.buttonDerivative2 = this.expressionsQueue[1].derivative;
          this.buttonDerivative3 = this.expressionsQueue[2].derivative;
          break;
        case 1:
          this.buttonDerivative1 = this.expressionsQueue[1].derivative;
          this.buttonDerivative2 = this.expressionsQueue[0].derivative;
          this.buttonDerivative3 = this.expressionsQueue[2].derivative;
          break;
        case 2:
          this.buttonDerivative1 = this.expressionsQueue[2].derivative;
          this.buttonDerivative2 = this.expressionsQueue[1].derivative;
          this.buttonDerivative3 = this.expressionsQueue[0].derivative;
          break;
        default:
          break;
      }
      this.fourthInQueue = this.expressionsQueue[3];
    };
    this.currentSong = audio;
    this.currentSong.load();
    this.currentSong.play();
  }


  ngOnInit() {
    this.configureLevel();
  }

}
