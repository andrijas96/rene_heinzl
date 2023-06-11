import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
  }
}
