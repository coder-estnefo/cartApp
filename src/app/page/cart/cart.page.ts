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
    this.count = this.cartService.getCartCount();
  }

  addItem(item) {
    this.cartService.addToCart(item);
    this.count = this.cartService.getCartCount();
  }

  removeOneItem(item) {
    this.cartService.removeOneItem(item);
    this.count = this.cartService.getCartCount();
  }

  removeItem(item) {
    this.cartService.removeFromCart(item);
    this.count = this.cartService.getCartCount();
  }

}
