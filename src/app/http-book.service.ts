import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Book } from './book.model';
import { map, catchError ,tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpBookService {


  constructor(
    private http: HttpClient
    ) { }

  httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };  

  getBooks(): Observable<Book[]>{  
    const url = 'http://localhost:3000/books';  
    return this.http.get<Book[]>(url).pipe(
      tap(data => 
        {          
          let arr : Book[] = [];
          console.log(arr);
          data.forEach(element => {
            arr.push(new Book (element));
          });
        console.log(arr);
        return arr;        
      }),
      catchError (err => {
        throw 'error in source. Details: ' + err;}
      )     
    )
  }
}
