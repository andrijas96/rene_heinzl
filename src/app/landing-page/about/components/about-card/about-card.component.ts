import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AboutCard } from '../../models/about-card.interface';

@Component({
  selector: 'about-card',
  templateUrl: './about-card.component.html',
})
export class AboutCardComponent implements OnInit {
  @Input()
  data!: AboutCard;

  @Output()
  setShow: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onShow(id: number) {
    this.data.show ? (this.data.show = false) : this.setShow.emit(id);
  }
}
