import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PersonService {

  constructor(private http: HttpClient) {
  }

  public getAllPeople() {
    return this.http.get('rest/person');
  }

  public getPerson(id: number) {
    return this.http.get('rest/person/' + id);
  }

  public createPerson(person) {
    return this.http.post('rest/person', person);
  }

}
