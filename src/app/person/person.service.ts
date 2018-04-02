import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

const API_URL = environment.jpaUrl;

@Injectable()
export class PersonService {

  constructor(private http: HttpClient) {
  }

  public getAllPeople() {
    return this.http.get(API_URL + 'person');
  }

  public getPerson(id: number) {
    return this.http.get(API_URL + 'person/' + id);
  }

  public createPerson(person) {
    return this.http.post(API_URL + 'person', person);
  }

}
