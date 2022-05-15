import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Coin } from '../models/coin';
import { News } from '../models/news';
import { CoinMover } from '../models/coin-mover';

@Injectable({
  providedIn: 'root'
})

export class CryptoService {
  static readonly BASE_API_URL: string = `${environment.mockBaseUrl}/cryptowatcher`;
  static readonly getNewsEndpoint: string = '';
  constructor(private http: HttpClient) { }

  public getCoins(): Observable<Coin[]> {
    return this.http.get<Coin[]>(`${CryptoService.BASE_API_URL}/coins`);
  }

  public getNews(): Observable<News[]> {
    return this.http.get<News[]>(`${CryptoService.BASE_API_URL}/get-news`);
  }

  public getCoinMovers(): Observable<CoinMover[]> {
    return this.http.get<CoinMover[]>(`${CryptoService.BASE_API_URL}/biggest-movers`);
  }
}
