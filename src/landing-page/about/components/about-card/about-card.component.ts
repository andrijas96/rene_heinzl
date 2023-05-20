import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss'],
})
export class AboutCardComponent implements OnInit {
  show: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
