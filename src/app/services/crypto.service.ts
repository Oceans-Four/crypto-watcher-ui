import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  static readonly BASE_API_URL: string = `${environment.mockBaseUrl}/cryptowatcher`;
  constructor() { }
  
}
