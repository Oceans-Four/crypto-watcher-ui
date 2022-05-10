import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-banner',
  templateUrl: './news-banner.component.html',
  styleUrls: ['./news-banner.component.scss']
})
export class NewsBannerComponent implements OnInit {
  newsItems: string[] = [
    'News Article 1',
    'News Article 2',
    'News Article 3',
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
