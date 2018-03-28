import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  person = [{name: 'Charles', surname: 'Xavier', mail: 'charles.xavier@xmen.com'}];

  constructor(private service: ApiService) {
  }

  ngOnInit() {
    // this.showPeople();
    this.showPerson(1);
    // this.showHomes();
    this.showHome(1);
  }

  showPeople() {
    this.service.getAllPeople().subscribe(
      next => console.log(next),
      error => console.log(error)
    );
  }

  showPerson(id: number) {
    this.service.getPerson(id).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  showHomes() {
    this.service.getAllHomes().subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  showHome(id: number) {
    this.service.getHome(id).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  /*addPerson() {
    this.service.createPerson(this.person).subscribe(
      (data: any) => console.log(data),
      error => console.log(error),
      () => console.log('created')
    );
  }
  */

}
