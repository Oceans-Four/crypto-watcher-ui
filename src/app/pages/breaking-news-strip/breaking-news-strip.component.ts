import { Component, OnInit } from '@angular/core';
import { CryptoService } from 'src/app/services/crypto.service';
import { CoinMover } from 'src/app/models/coin-mover';

@Component({
  selector: 'app-breaking-news-strip',
  templateUrl: './breaking-news-strip.component.html',
  styleUrls: ['./breaking-news-strip.component.scss']
})
export class BreakingNewsStripComponent implements OnInit {
  coinMovers: CoinMover[] = [];
  constructor(private cryptoService: CryptoService) {}

  ngOnInit(): void {
    this.getCoinMovers();
  }

  getCoinMovers(): void {
    this.cryptoService.getCoinMovers().subscribe((response: CoinMover[]) => {
      this.coinMovers = response;
      console.log(this.coinMovers);
    });
  }
}
