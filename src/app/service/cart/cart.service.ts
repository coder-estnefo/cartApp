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
    if (this.cartList.length == 0) {
        this.cartList.push({'name': item.name, 'quantity': item.quantity});
    } else {
        let i;
        for (i = 0; i < this.cartList.length; i++) {
          if (item.name == this.cartList[i]['name']) {
              let quantity = this.cartList[i]['quantity'];
              //this.cartList.splice(i, 1, {'name': item.name, 'quantity': quantity + 1});
              this.cartList[i]['quantity'] = quantity + 1;
              break;
          }
        }

        if(i == this.cartList.length) {
          this.cartList.push({'name': item.name, 'quantity': item.quantity});
        }
    }
    
  }

  removeFromCart(item) {
    for (let i = 0; i < this.cartList.length; i++) {
      if (item.name == this.cartList[i]['name']) {
        this.cartList.splice(i, 1);
        break;
      }
    }
  }

  removeOneItem(item) {
    for (let i = 0; i < this.cartList.length; i++) {
      if (item.name == this.cartList[i]['name']) {
          let quantity = this.cartList[i]['quantity'];
          if (quantity == 1) {
              this.cartList.splice(i, 1);
              break;
          } else {
              //this.cartList.splice(i, 1, {'name': item.name, 'quantity': quantity - 1});
              this.cartList[i]['quantity'] = quantity - 1;
              break;
          }
      }
    }

  }

  getCartCount() {
    let total = 0;
    for (let i = 0; i < this.cartList.length; i++) {
      total += this.cartList[i]['quantity'];
    }

    return total;
  }

}
