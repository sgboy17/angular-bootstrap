import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  books =[
    {id: 1, name: "Tre Trau 1", author: "Maxim Gorky", imagePath: "https://cdn2.thecatapi.com/images/9b0.jpg"},
    {id: 2, name: "Tre Trau 2", author: "Maxim Gorky", imagePath: "c002@email.com"},
    {id: 3, name: "Tre Trau 3", author: "Maxim Gorky", imagePath: "c003@email.com"},
    {id: 4, name: "Tre Trau 4", author: "Maxim Gorky", imagePath: "c004@email.com"}

  ]

  constructor() { }

  public getBooks():Array<{id, name, author, imagePath}>{
    return this.books;
  }
}
