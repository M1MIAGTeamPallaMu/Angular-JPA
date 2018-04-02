import {Component, OnInit} from '@angular/core';
import {HomeService} from './home/home.service';
import {PersonService} from './person/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private homeService: HomeService,
    private personService: PersonService,
              ) {}

  ngOnInit() {
    this.showPeople();
    this.showHomes();
  }

  showPeople() {
    this.personService.getAllPeople().subscribe(
      next => console.log(next),
      error => console.log(error),
    );
  }

  showHomes() {
    this.homeService.getAllHomes().subscribe(
      data => console.log(data),
      error => console.log(error),
    );
  }

}
