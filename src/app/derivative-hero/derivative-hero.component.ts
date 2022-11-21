import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-derivative-hero',
  templateUrl: './derivative-hero.component.html',
  styleUrls: ['./derivative-hero.component.scss'],
})
export class DerivativeHeroComponent implements OnInit {

  numbers: number[] = [];

  constructor() { }

  ngOnInit() {
    this.numbers = Array(50).fill(0).map((x, i) => i);
  }

}
