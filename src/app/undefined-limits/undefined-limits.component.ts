import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-undefined-limits',
  templateUrl: './undefined-limits.component.html',
  styleUrls: ['./undefined-limits.component.scss'],
})
export class UndefinedLimitsComponent implements OnInit {

  challenge = '$\\lim_{x\\to-5}\\frac{x^2-25}{x^2+2x-15}$';

  constructor() { }

  ngOnInit() {}

}
