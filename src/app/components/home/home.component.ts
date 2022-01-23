import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  p: number = 1;
  books = new Array();
  env = environment;
  public load = true;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getAllIllustrations().subscribe(
      books => {
        this.books = books;
        // loading
        this.load = false;
        // console.log(books);
    });
  }

}
