import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AboutCard } from '../../models/about-card.interface';

@Component({
  selector: 'about-card',
  templateUrl: './about-card.component.html',
})
export class AboutCardComponent implements OnInit {
  @Input()
  card!: AboutCard;

  @Output()
  setShow: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  setCard: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onShow(id: number) {
    this.card.show ? (this.card.show = false) : this.setShow.emit(id);
  }

  changeCard(direction: string) {
    this.setCard.emit(direction);
  }
}
