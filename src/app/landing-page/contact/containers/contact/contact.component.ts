import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  constructor() {}

  contacts: { icon: string; username: string }[] = [
    {
      icon: 'phone',
      username: '+23 49925 91237',
    },
    {
      icon: 'email',
      username: 'rene.heinzl@gmail.com',
    },
    {
      icon: 'web',
      username: 'reneheinzl.at',
    },
    {
      icon: 'facebook',
      username: 'facebook.com/reneheinzl',
    },
    {
      icon: 'instagram',
      username: '@reneheinzl',
    },
    {
      icon: 'git',
      username: '@reneheinzl',
    },
  ];

  ngOnInit(): void {}
}
