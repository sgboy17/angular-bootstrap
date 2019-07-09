import { Book } from './book.model';

export class CartItem {
    public book: Book;
    public quantity: number;

    // constructor(obj: any){
    //     this.book = obj.book;
    //     this.quantity = obj.quantity;
    // }

    constructor(book: Book, quantity: number){
        this.book = book;
        this.quantity = quantity;
    }
}
