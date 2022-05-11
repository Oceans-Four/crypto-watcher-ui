import { Component, OnInit } from '@angular/core';
import { CryptoService } from 'src/app/services/crypto.service';
import { News } from '../../models/news';
@Component({
  selector: 'app-news-banner',
  templateUrl: './news-banner.component.html',
  styleUrls: ['./news-banner.component.scss']
})
export class NewsBannerComponent implements OnInit {

  news: any = [];


  newsItems: string[] = [
    'News Article 1',
    'News Article 2',
    'News Article 3',
  ];
  constructor(private cryptoService : CryptoService) { }

  ngOnInit(): void {
    this.cryptoService.getNews().subscribe((response: any)=>{
        this.news = response.data;
        console.log(this.news);
    })
  }
}
