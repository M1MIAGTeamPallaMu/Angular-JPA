import {Component, OnInit} from '@angular/core';
import {HomeService} from './home/home.service';
import {PersonService} from './person/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
