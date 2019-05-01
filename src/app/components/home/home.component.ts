import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bookForm: FormGroup;
  validMessage: string = "";

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookForm=new FormGroup({
      date: new FormControl('', Validators.required),
      isbn: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    });
  }

  submitRegistration() {
    console.log(this.bookForm.value);
    if(this.bookForm.valid) {
      this.validMessage = "Your registration is valid, thank you.";
      this.bookService.createBookRegistration(this.bookForm.value)
      .subscribe(
        data => {
          this.bookForm.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      );
    } else {
      this.validMessage = "Please fill out this form before submitting."
    }
  }
}
