import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-derivative-hero',
  templateUrl: './derivative-hero.component.html',
  styleUrls: ['./derivative-hero.component.scss'],
})
export class DerivativeHeroComponent implements OnInit {

  numbers: number[] = [];
  songDuration: number = 0;

  constructor() { }

  playSong() {
    const audio = new Audio('../../assets/audio/songs/no-copy-1.mp3');
    audio.onloadedmetadata = (e: any) => {
      this.songDuration = e.currentTarget.duration;
    };
    audio.load();
    audio.play();
  }

  ngOnInit() {
    this.numbers = Array(50).fill(0).map((x, i) => i);
    this.playSong();
  }

}
