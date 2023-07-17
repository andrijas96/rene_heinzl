import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ServiceCard } from '../../models/service-card.interface';

import { register } from 'swiper/element/bundle';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
})
export class ServicesComponent implements OnInit, AfterViewInit {
  services: ServiceCard[] = [
    {
      id: 1,
      title: 'Work Flows',
      subtitle: 'Development and Design',
      info: [
        'We are specialized in providing highly customized solutions tailored specifically to your needs. This is made possible by thoroughly discussing and reviewing your already established work flow personally in great detail so as to determine all of your requirements and needs.',
      ],
      url: '../../../../assets/Kopie von 230201-ReneHeinzl-Manevera-Shooting-030.jpg',
      show: false,
    },
    {
      id: 1,
      title: 'Work Flows',
      subtitle: 'Development and Design',
      info: [
        'Our teams design and implement corporate designs by using our software modules into convenient web-based applications which allow for high portability and wide accessibility from all around the world with a great number of different devices.',
      ],
      url: '../../../../assets/Kopie von 230201-ReneHeinzl-Manevera-Shooting-030.jpg',
      show: false,
    },
    {
      id: 2,
      title: 'Strategy & Research',
      subtitle: 'BUSINESS',
      info: [
        'Benefit from our development experience, academic research, technological insights on trends and possibilities in application and software design and architecture and our successfully completed projects.',
      ],
      url: '../../../../assets/Kopie von 230201-ReneHeinzl-Manevera-Shooting-024.jpg',
      show: false,
    },
    {
      id: 2,
      title: 'Strategy & Research',
      subtitle: 'BUSINESS',
      info: [
        'The academic training and experience qualifies Dr. René Heinzl to conduct research for your needs in various fields of scientific computing. From the purely computational aspects to discretization schemes and the solution of linear systems we and our partners have the combined expertise to tackle problems of great intricacies with ease.',
      ],
      url: '../../../../assets/Kopie von 230201-ReneHeinzl-Manevera-Shooting-024.jpg',
      show: false,
    },
    {
      id: 3,
      title: 'Intellectual Property',
      subtitle: 'MANAGEMENT AND CONTRACTS',
      info: [
        'We are specialized in providing highly customized solutions tailored specifically to your needs. This is made possible by thoroughly discussing and reviewing your already established work flow personally in great detail so as to determine all of your requirements and needs.',
      ],
      url: '../../../../assets/Kopie von 230201-ReneHeinzl-Manevera-Shooting-052.jpg',
      show: false,
    },
    {
      id: 3,
      title: 'Intellectual Property',
      subtitle: 'MANAGEMENT AND CONTRACTS',
      info: [
        'Since software licenses represent a substantial financial commitment a clear understanding of both the available choices as well as your requirements and needs is of great importance. We offer our services and knowledge of systems and software to advise you in the process of selection of acquisition to ensure the best of results for you.',
      ],
      url: '../../../../assets/Kopie von 230201-ReneHeinzl-Manevera-Shooting-052.jpg',
      show: false,
    },
  ];

  currentId: number = 1;
  currentService: ServiceCard = this.services[0];
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

  change(direction: string) {
    if (direction === 'left') {
      if (this.nextInfo) {
        this.nextInfo = false;
        return;
      }

      this.currentId =
        this.currentId == 1 ? this.services.length : this.currentId - 1;

      this.nextInfo = true;
    } else if (direction === 'right') {
      if (!this.nextInfo) {
        this.nextInfo = true;
        return;
      }
      this.currentId =
        this.currentId == this.services.length ? 1 : this.currentId + 1;
      this.nextInfo = false;
    }
  }
}
