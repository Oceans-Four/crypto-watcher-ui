import { Component, OnInit } from "@angular/core";
import { Observable, map } from "rxjs";
import { CryptoService } from "./services/crypto.service";
import { Coin } from './models/coin';
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crypto-watcher-ui';
  public coins: Coin[] = [];
  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
    // this.getCoins();
    console.log(this.getCoins());
  }

  public getCoins(): void {
    this.cryptoService.getCoins().subscribe(
      (response: Coin[]) => {
        this.coins = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
}
