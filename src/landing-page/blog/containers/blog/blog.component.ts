import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  articles: string[] = [
    'Exploring the Benefits of AI Consulting  ',
    'AI Consulting: A Guide to Success',
    'AI-Powered Consulting Strategies',
    'The Future of AI-Based Consulting',
    'AI and Business Consulting: A Match Made in Heaven?',
  ];
  constructor() {}

  ngOnInit(): void {}
}
