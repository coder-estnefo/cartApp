import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartList = [];

  constructor() { }

  getCartItems() {
    return this.cartList;
  }

  addToCart(item) {
    
   /* for (let i = 0; i)

    if (this.cartList.indexOf(item.name]) > -1) {
      let index = this.cartList.indexOf(item.name);
      let q = this.cartList[index]['quantity'] + 1;
      this.cartList.splice(index, 1);
      this.cartList.push({'name': item.name, 'quantity': q});
    } else {
      this.cartList.push({'name': item.name, 'quantity': item.quantity})
    }
    console.log(this.cartList);
    */
  }

  removeFromCart(item) {
    this.cartList.splice(this.cartList.indexOf(item),1);
  }
}
