import { Component, HostListener } from '@angular/core';
import { EasingLogic } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Von Alfafara -Portfolio';
  nav 
  about
  toggle = false
  innerWidth
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

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;

    this.toggle = this.innerWidth >= 768
      
  }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true)
    this.nav = document.querySelector('.nav')
    this.about = document.querySelector('#about')

    this.toggle = window.innerWidth >= 768
  }

  ngAfterViewInit() {
  }    
  
  scroll = () => {
    if (this.nav.getBoundingClientRect().y <= 0){
      this.nav.style.position = "fixed"
      this.about.classList.add('nav-sticked')
    }

    if (this.about.getBoundingClientRect().y > 0){
      this.nav.style.position = "relative"
      this.about.classList.remove('nav-sticked')
    }
  };

  open(el) {
    console.log(el)
  }

  scrollToElement(target) {
    console.log(target)
  }
}
