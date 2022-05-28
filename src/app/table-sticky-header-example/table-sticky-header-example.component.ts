import { Component, Input, OnInit } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { Coin } from '../models/coin';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * @title Table with sticky header
 */
@Component({
  selector: 'table-sticky-header-example',
  styleUrls: ['table-sticky-header-example.component.scss'],
  templateUrl: 'table-sticky-header-example.component.html',
})
export class TableStickyHeaderExample implements OnInit {
  coins: Coin[] = [];
  constructor(private cryptoService: CryptoService) {}
  displayedColumns = ['icon', 'symbol', 'price', 'name', 'marketCap'];

  // @Input()
  // data: any;

  ngOnInit(): void {
    this.getCoins();
  }

  getCoins(): void {
    this.cryptoService.getCoins().subscribe((response: Coin[]) => {
      this.coins = response;
    });
  }
}
