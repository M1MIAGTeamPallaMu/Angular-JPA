import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from './person.model';

@Injectable()
export class PersonService {

  constructor(private http: HttpClient) {
  }

  public getAllPeople() {
    return this.http.get<Person[]>('rest/person');
  }

  public getPerson(id: number) {
    return this.http.get<Person>('rest/person/' + id);
  }

  public createPerson(person) {
    return this.http.post<Person>('rest/person', person);
  }

}
