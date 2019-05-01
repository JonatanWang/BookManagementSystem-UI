import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  getBooks() {

    return this.http.get('server/api/v1/books');
  }

  getBook(id : number) {

    return this.http.get('server/api/v1/books/' + id);
  }

  createBookRegistration(book: any) {
    let body = JSON.stringify(book);
    console.log(body);
    return this.http.post('server/api/v1/books', body, httpOptions);
  }
}
