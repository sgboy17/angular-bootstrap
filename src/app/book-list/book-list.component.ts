import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpBookService } from '../http-book.service';
import { Observable } from 'rxjs';
import { Book } from '../book.model';
import { CartItem } from '../cart-item.model';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books;
  selectedBook;
  cart: CartItem[] = [];

  // constructor( ) { }
  constructor( public httpBookService: HttpBookService,
      private cartService:CartService,
      private router:Router
    ) { }

  // getBooks():Observable<Book[]>{
  //   return this.httpBookService.getBooks<Book[]>(this.)
  // }


  ngOnInit() {
    // console.log("book-list ng On Init");
    this.httpBookService.getBooks().subscribe(response => {
      this.books = response;
      // response.filter(m => )
      console.log(this.books)
      console.log(response)})    

  }

  testBack(){
    console.log(this.cartService.getCart());
  }

  public selectBook(book){
    this.selectedBook = book;
  }

  public addToCart(book, quantity){
    this.cartService.addToCart(book,quantity);
    this.router.navigate(["/book-shopping-cart"]);
  }

}
