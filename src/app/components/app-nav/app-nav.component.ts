import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss'],
})
export class AppNavComponent implements OnInit {
  links: string[] = ['home', 'about', 'services', 'blog'];

  navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
  }

  constructor() {}

  ngOnInit(): void {}
}
