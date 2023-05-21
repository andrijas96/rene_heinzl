import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss'],
})
export class AboutCardComponent implements OnInit {
  @Input()
  data!: { id: number; url: string; text: string; show: boolean };

  @Output()
  setShow: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onShow(id: number) {
    this.data.show ? (this.data.show = false) : this.setShow.emit(id);
  }
}
