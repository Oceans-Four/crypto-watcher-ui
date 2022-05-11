import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Coin } from '../models/coin';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})

export class CryptoService {
  static readonly BASE_API_URL: string = `${environment.mockBaseUrl}/cryptowatcher`;
  static readonly BASE_NEWS_URL: string = `${environment.mockNewsUrl2}`;
  constructor(private http: HttpClient) { }

  public getCoins(): Observable<Coin[]> {
    return this.http.get<Coin[]>(`${CryptoService.BASE_API_URL}/coins`);
  }

  public getNews(): Observable<News[]> {
    return this.http.get<News[]>(`${CryptoService.BASE_NEWS_URL}`);
  }

}
