import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Coin } from '../models/coin';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  static readonly BASE_API_URL: string = `${environment.apiBaseUrl}/cryptowatcher`;
  constructor(private http: HttpClient) { }

  public getCoins(): Observable<Coin[]> {
    return this.http.get<Coin[]>(`${CryptoService.BASE_API_URL}/coins`);
  }

}
