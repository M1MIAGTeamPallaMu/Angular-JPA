import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class HomeService {

  constructor(private http: HttpClient) {
  }

  public getAllHomes() {
    return this.http.get('rest/home');
  }

  public getHome(id: number) {
    return this.http.get('rest/home/' + id);
  }

}
