import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart/cart.service';
import { ITEMS } from 'src/mocks/item.mock';
import { Item } from 'src/modal/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  items = ITEMS;
  count;

  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {
    this.count = this.cartService.getCartItems().length;
  }

  addItem(item) {
    this.cartService.addToCart(item);
    this.count = this.cartService.getCartItems().length;
  }

  removeItem(item) {
    this.cartService.removeFromCart(item);
    this.count = this.cartService.getCartItems().length;
  }

  goToCart() {
    this.router.navigate(['cart']);
  }

}