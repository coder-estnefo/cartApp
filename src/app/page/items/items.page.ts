import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart/cart.service';
import { ITEMS } from 'src/mocks/item.mock';

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
    this.count = this.cartService.getCartCount();
    
  }

  addItem(item) {
    this.cartService.addToCart(item);
    this.count = this.cartService.getCartCount();
  }

  removeItem(item) {
    this.cartService.removeFromCart(item);
    this.count = this.cartService.getCartCount();
  }

  goToCart() {
    this.router.navigate(['cart']);
  }

}
