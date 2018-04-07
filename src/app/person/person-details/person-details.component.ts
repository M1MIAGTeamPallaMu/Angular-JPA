import { Component, OnInit } from '@angular/core';
import {Person} from '../person.model';
import {PersonService} from '../person.service';
import {ActivatedRoute} from '@angular/router';
import {Home} from '../../home/home.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  person: Person;
  homes: Home[] = [];

  constructor(private personService: PersonService, private route: ActivatedRoute, public location: Location) {
  }

  ngOnInit() {

    this.personService.getPerson(+this.route.snapshot.paramMap.get('id')).subscribe(
      data => this.person = data,
      error => console.log(error),
    );

    this.personService.getPersonHomes(+this.route.snapshot.paramMap.get('id')).subscribe(
      data => this.homes = data,
      error => console.log(error),
    );

  }
}
