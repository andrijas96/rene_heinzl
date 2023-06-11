import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'track-record',
  templateUrl: './track-record.component.html',
})
export class TrackRecordComponent implements OnInit {
  constructor() {}

  data: { text: string; url: string }[] = [
    {
      text: 'Introduction of practical AI and machine learning in waste management',
      url: '../../../../assets/ptr1.jpg',
    },
    {
      text: 'Application development for practical AI in industrial quality management',
      url: '../../../../assets/ptr2.jpg',
    },
    {
      text: 'Crypto-currency and blockchain smart contract application development',
      url: '../../../../assets/ptr3.jpg',
    },
    {
      text: 'See More',
      url: '../../../../assets/ptr4.jpg',
    },
  ];

  ngOnInit(): void {}
}
