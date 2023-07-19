import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { AboutCard } from '../../models/about-card.interface';

import { register } from 'swiper/element/bundle';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit, AfterViewInit {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;

  changeSlide(direction: string) {
    let speed = 300;
    let runCallbacks = true;
    if (direction == 'next') {
      this.swiperRef?.nativeElement.swiper.slideNext(speed, runCallbacks);
    } else {
      this.swiperRef?.nativeElement.swiper.slidePrev(speed, runCallbacks);
    }
  }
  constructor() {}

  data: AboutCard[] = [
    {
      id: 0,
      url: '../../../../assets/about1.jpg',
      text: 'I’m a tech-savvy entrepreneur who is always on the move and enjoys taking on responsibilities and solving problems as they arise. My passion for technology was evident from a young age, articularly when I successfully created a simple jump-and-run game using GW Basic at the age of 10.',
      show: false,
    },
    {
      id: 1,
      url: './../../../assets/about2.jpg',
      text: 'I have been able to continuously develop and apply my skills and knowledge, founding several companies and acting as a consultant and senior manager in industries ranging from information technology to artificial intelligence. I am constantly looking for opportunities to improve operations by utilizing new technologies.',
      show: false,
    },
    {
      id: 2,
      url: './../../../assets/about3.jpg',
      text: "To me, good leadership means creating a positive work environment that focuses on the growth and well-being of my team. My experience in upper management has allowed me to effectively handle multiple tasks and keep everyone informed of progress on projects. I've been lucky to have worked with a team of collaborators and employees through over 40 projects and 10+ M&A deals.",
      show: false,
    },
  ];

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    register();
  }

  handleShow(id: number) {
    this.data.forEach((card: AboutCard) => {
      card.show = card.id == id;
    });
  }
}
