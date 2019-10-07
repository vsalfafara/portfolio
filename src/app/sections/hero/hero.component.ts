import { Component, OnInit } from '@angular/core';
import { EasingLogic } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  
  public easing: EasingLogic = (t: number, b: number, c: number, d: number): number => {
    if (t === 0) {
      return b;
    }
    if (t === d) {
      return b + c;
    }
    if ((t /= d / 2) < 1) {
      return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    }
    console.log(t)
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  }

  constructor() { }

  ngOnInit() {
  }

}
