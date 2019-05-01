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
    let token = localStorage.getItem('access_token');

    return this.http.get('server/api/v1/books', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)
    });
  }

  getBook(id : number) {
    let token = localStorage.getItem('access_token');

    return this.http.get('server/api/v1/books/' + id, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)
    });
  }

  createBookRegistration(book: any) {
    let body = JSON.stringify(book);
    console.log(body);
    return this.http.post('server/api/v1/books', body, httpOptions);
  }
}
