import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CartItem } from '../cart-item.model';
import { BookListComponent } from '../book-list/book-list.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-book-shopping-cart',
  templateUrl: './book-shopping-cart.component.html',
  styleUrls: ['./book-shopping-cart.component.css']
})
export class BookShoppingCartComponent implements OnInit {

  // @Input() cart;
  // @ViewChild(BookListComponent,{read:1,static:false}) bookList : BookListComponent;
  
  cart: CartItem[] = [];
  name: string;
  quantity: number;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.name ="";
    this.quantity = 0;

    this.cart = this.cartService.getCart();
    console.log(this.cart);
  }

  updateToCart(name: string, quantity: number){
    this.cartService.updateToCart(name, quantity);
    this.cart = this.cartService.getCart(); 
  }

  

  // ngAfterViewInit(){

  //   this.cart =  this.bookList.cart;
  //   console.log(this.cart);
  // }





}
