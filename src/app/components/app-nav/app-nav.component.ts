import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
})
export class AppNavComponent implements OnInit {
  links: string[] = ['home', 'about', 'services', 'blog'];

  show: boolean = false;

  constructor() {}

  navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;

    this.show = false;
  }

  ngOnInit(): void {}
}
