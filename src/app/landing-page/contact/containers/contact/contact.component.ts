import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  constructor() {}

  contacts: { icon: string; username: string; url: string }[] = [
    {
      icon: 'phone',
      username: '+23 49925 91237',
      url: '',
    },
    {
      icon: 'email',
      username: 'rene.heinzl@gmail.com',
      url: '',
    },
    {
      icon: 'web',
      username: 'reneheinzl.at',
      url: 'http://reneheinzl.at/',
    },
    {
      icon: 'facebook',
      username: 'facebook.com/reneheinzl',
      url: 'https://www.facebook.com/reneheinzl',
    },
    {
      icon: 'instagram',
      username: '@reneheinzl',
      url: 'https://www.instagram.com/reneheinzl/',
    },
    {
      icon: 'git',
      username: '@reneheinzl',
      url: 'https://github.com/reneheinzl',
    },
  ];

  links: string[] = ['home', 'about', 'services', 'blog'];

  navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
  }

  goToLink(url: string) {
    if (url === '') {
      return;
    }
    window.open(url, '_blank');
  }

  ngOnInit(): void {}
}
