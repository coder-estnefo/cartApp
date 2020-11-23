import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cart;
  count;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getCartItems();
    this.count = this.cartService.getCartItems().length;
  }

}
