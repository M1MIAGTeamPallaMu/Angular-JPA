import { Component, OnInit } from '@angular/core';
import {PersonService} from './person.service';
import {Person} from './person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  people: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.personService.getAllPeople().subscribe(
      data => this.people = data,
      error => console.log(error),
    );
  }

}
