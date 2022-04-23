import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class CryptoService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'https://api.coinranking.com/v2';
  apiKey: string = 'coinranking0689dc69731519976cf7c7d50553a4f40e5d59ced02b791e';
  
  getCoins(){
      return this.http.get('https://62564f8552d8738c692dcc47.mockapi.io/api/v1/cryptowatcher/coins');
  }
}
