import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

const API_URL = environment.jpaUrl;

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) {
  }

  public getAllHomes() {
    return this.http.get(API_URL + 'home');
  }

  public getHome(id: number) {
    return this.http.get(API_URL + 'home/' + id);
  }

}
