import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {Person} from '../person.model';
import {PersonService} from '../person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  person: Person = {};

  constructor(public location: Location, private personService: PersonService) { }

  ngOnInit() {
  }

  save() {
    this.personService.createPerson(this.person).toPromise().catch(e => console.log(e));
    this.location.back();
  }

}
