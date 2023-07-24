import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ServiceCard } from '../../models/service-card.interface';

import { register } from 'swiper/element/bundle';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
})
export class ServicesComponent implements OnInit, AfterViewInit {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;

  @ViewChild('logo')
  logoRef: ElementRef | undefined;

  services: ServiceCard[] = [
    {
      id: 1,
      title: 'Work Flows',
      subtitle: 'Development and Design',
      info: [
        'We are specialized in providing highly customized solutions tailored specifically to your needs. This is made possible by thoroughly discussing and reviewing your already established work flow personally in great detail so as to determine all of your requirements and needs.',
        'Our teams design and implement corporate designs by using our software modules into convenient web-based applications which allow for high portability and wide accessibility from all around the world with a great number of different devices.',
      ],
      url: '../../../../assets/Kopie von 230201-ReneHeinzl-Manevera-Shooting-030.jpg',
      show: false,
      logoUrl: '../../../../assets/rh_logo_nofont_rot.png',
      color: 'cube-rot',
    },

    {
      id: 2,
      title: 'Strategy & Research',
      subtitle: 'BUSINESS',
      info: [
        'Benefit from our development experience, academic research, technological insights on trends and possibilities in application and software design and architecture and our successfully completed projects.',

        'The academic training and experience qualifies Dr. René Heinzl to conduct research for your needs in various fields of scientific computing. From the purely computational aspects to discretization schemes and the solution of linear systems we and our partners have the combined expertise to tackle problems of great intricacies with ease.',
      ],
      url: '../../../../assets/Kopie von 230201-ReneHeinzl-Manevera-Shooting-024.jpg',
      show: false,
      logoUrl: '../../../../assets/rh_logo_nofont_blau.png',
      color: 'cube-blau',
    },

    {
      id: 3,
      title: 'Intellectual Property',
      subtitle: 'MANAGEMENT AND CONTRACTS',
      info: [
        'We are specialized in providing highly customized solutions tailored specifically to your needs. This is made possible by thoroughly discussing and reviewing your already established work flow personally in great detail so as to determine all of your requirements and needs.',
        'Since software licenses represent a substantial financial commitment a clear understanding of both the available choices as well as your requirements and needs is of great importance. We offer our services and knowledge of systems and software to advise you in the process of selection of acquisition to ensure the best of results for you.',
      ],
      url: '../../../../assets/Kopie von 230201-ReneHeinzl-Manevera-Shooting-052.jpg',
      show: false,
      logoUrl: '../../../../assets/rh_logo_nofont_orange.png',
      color: 'cube-orange',
    },
  ];

  currentId: number = 1;
  currentService: ServiceCard = this.services[0];
  currentLogo: string = this.services[0].logoUrl;
  nextInfo: boolean = true;

  showId: number = 0;

  constructor() {}

  ngAfterViewInit(): void {
    register();
  }

  ngOnInit(): void {
    console.log(this.currentId);
  }

  setCurrent(id: number) {
    //Trigger logo animation
    if (id != this.currentService.id) {
      this.triggerLogoAnimation(id);
    }

    // For Current display
    this.nextInfo = true;
    this.currentService = this.services[id - 1];

    //For Image Animation
    if (this.showId == id) {
      this.services[id - 1].show = false;
      this.showId = 0;
    } else {
      this.showId = id;
      this.services.forEach((service: ServiceCard) =>
        id == service.id ? (service.show = true) : (service.show = false)
      );
    }
  }

  triggerLogoAnimation(id: number) {
    this.logoRef?.nativeElement.classList.add('opacity-10', 'grayscale');
    setTimeout(() => {
      this.currentLogo = this.services[id - 1].logoUrl;
    }, 350);
    setTimeout(() => {
      this.logoRef?.nativeElement.classList.remove('opacity-10', 'grayscale');
    }, 700);
  }

  changeSlide(direction: string) {
    let speed = 300;
    let runCallbacks = true;

    if (direction == 'prev') {
      if (this.nextInfo) {
        this.swiperRef?.nativeElement.swiper.slidePrev(speed, runCallbacks);
        this.nextInfo = false;
      } else {
        this.nextInfo = true;
      }
    } else if (direction == 'next') {
      if (!this.nextInfo) {
        this.swiperRef?.nativeElement.swiper.slideNext(speed, runCallbacks);
        this.nextInfo = true;
      } else {
        this.nextInfo = false;
      }
    }
  }
}
