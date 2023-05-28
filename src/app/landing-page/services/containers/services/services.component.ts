import { Component, OnInit } from '@angular/core';
import { ServiceCard } from '../../models/service-card.interface';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  services: ServiceCard[] = [
    {
      id: 1,
      title: 'Work Flows',
      subtitle: 'Development and Design',
      info: [
        'We are specialized in providing highly customized solutions tailored specifically to your needs. This is made possible by thoroughly discussing and reviewing your already established work flow personally in great detail so as to determine all of your requirements and needs.',
        'Our teams design and implement corporate designs by using our software modules into convenient web-based applications which allow for high portability and wide accessibility from all around the world with a great number of different devices.',
      ],
      url: '',
    },
    {
      id: 2,
      title: 'Strategy & Research',
      subtitle: 'BUSINESS',
      info: [
        'Benefit from our development experience, academic research, technological insights on trends and possibilities in application and software design and architecture and our successfully completed projects.',
        'The academic training and experience qualifies Dr. René Heinzl to conduct research for your needs in various fields of scientific computing. From the purely computational aspects to discretization schemes and the solution of linear systems we and our partners have the combined expertise to tackle problems of great intricacies with ease.',
      ],
      url: '',
    },
    {
      id: 3,
      title: 'Intellectual Property',
      subtitle: 'MANAGEMENT AND CONTRACTS',
      info: [
        'We are specialized in providing highly customized solutions tailored specifically to your needs. This is made possible by thoroughly discussing and reviewing your already established work flow personally in great detail so as to determine all of your requirements and needs.',
        'Since software licenses represent a substantial financial commitment a clear understanding of both the available choices as well as your requirements and needs is of great importance. We offer our services and knowledge of systems and software to advise you in the process of selection of acquisition to ensure the best of results for you.',
      ],
      url: '',
    },
  ];

  currentService: ServiceCard = this.services[0];
  show: boolean = false;
  showOne: boolean = false;
  showTwo: boolean = false;
  showThree: boolean = false;
  nextInfo: boolean = true;

  showId: number = 0;

  constructor() {}

  ngOnInit(): void {}
  setCurrent(id: number) {
    this.nextInfo = true;
    this.currentService = this.services[id - 1];
    this.closeAll();
    switch (id) {
      case 1:
        if (this.showId == id) {
          this.showOne = false;
          this.showId = 0;
        } else {
          this.showOne = true;
          this.showId = id;
        }
        break;
      case 2:
        if (this.showId == id) {
          this.showTwo = false;
          this.showId = 0;
        } else {
          this.showTwo = true;
          this.showId = id;
        }
        break;
      case 3:
        if (this.showId == id) {
          this.showThree = false;
          this.showId = 0;
        } else {
          this.showThree = true;
          this.showId = id;
        }
        break;

      default:
        break;
    }
  }
  closeAll() {
    this.showOne = false;
    this.showTwo = false;
    this.showThree = false;
  }
}
