import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private service: ApiService) {
  }

  ngOnInit() {
    this.showPeople();
    this.showPerson(1);
  }

  showPeople() {
    this.service.getAllPeople().subscribe(
      next => console.log(next),
      error => console.log(error),
      () => console.log('it is working fine')
    );
  }

  showPerson(id: number) {
    this.service.getPerson(id).subscribe(
      data => console.log(data),
      error => console.log(error),
      () => console.log('it is working fine too')
    );
  }

}
