import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public books: Object;

  constructor(private bookService:BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    
    this.bookService.getBooks().subscribe(

      data => {this.books = data},
      error => console.error(error),
      () => console.log("Book Loaded.")
    );
  }
}
