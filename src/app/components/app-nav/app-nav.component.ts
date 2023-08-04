import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
})
export class AppNavComponent implements OnInit {
  links: string[] = ['home', 'about', 'services', 'blog'];
  activeLink: string = '';
  show: boolean = false;

  height: number = 4000;
  clickedNav: boolean = false;

  constructor() {}

  navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
    this.show = false;
    this.activeLink = section;

    //Click Priority
    // this.clickedNav = true;
    // console.log('clicked 1', this.clickedNav);

    // setTimeout(() => {
    //   this.clickedNav = false;
    //   console.log('clicked 2', this.clickedNav);
    // }, 1000);
  }

  // @HostListener('window:scroll', ['$event'])
  // changeActiveNavOnScroll() {
  //   if (this.clickedNav) {
  //     console.log('no');
  //     return;
  //   } else {
  //     console.log('yes');
  //     let scrollPositionPercent = Math.floor(
  //       (window.pageYOffset / this.height) * 100
  //     );
  //     // console.log(scrollPositionPercent);
  //     if (scrollPositionPercent > 0 && scrollPositionPercent < 12) {
  //       this.activeLink = 'home';
  //     } else if (scrollPositionPercent > 13 && scrollPositionPercent < 30) {
  //       this.activeLink = 'about';
  //     } else {
  //     }
  //   }
  // }

  ngOnInit(): void {
    //Calculate entire web page height
    // let body = document.body;
    // let html = document.documentElement;
    // this.height = Math.max(
    //   body.scrollHeight,
    //   body.offsetHeight,
    //   html.clientHeight,
    //   html.scrollHeight,
    //   html.offsetHeight
    // );
    // console.log(this.height);
  }
}
