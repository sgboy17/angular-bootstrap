import { Injectable } from '@angular/core';
import { CartItem } from './cart-item.model';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Array<CartItem> = [];

  constructor() { }

  public addToCart(book: Book, quantity: number){
    //find book existence
    // debugger;
    let cartItem = this.cart.find(cart => cart.book.id == book.id);

    //false: add object with quantity
    if(cartItem != undefined){
      cartItem.quantity += quantity;
    } 
    //true: update quantity of the object
    else{ 
      this.cart.push(new CartItem(book, quantity));
    }

    console.log(this.cart);
  }

  public updateToCart(bookName: string, quantity: number){
    //find book existence
    // debugger;
    let cartItem = this.cart.find(cart => cart.book.name == bookName);

    //false: add object with quantity
    if(cartItem != undefined){
      cartItem.quantity = quantity;
    } 
    //true: update quantity of the object
    else{ 
      console.log("The item is unavailable!!!");
      //this.cart.push(cartItem);
    }

    console.log(this.cart);
  }



  public getCart(){
    return this.cart;
  }
}
