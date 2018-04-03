import { Component, OnInit } from '@angular/core';
import {HomeService} from './home.service';
import {Home} from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homes: any;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getAllHomes().subscribe(
      data => this.homes = data,
      error => console.log(error),
    );
  }

}
