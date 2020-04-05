import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParametresService {

  url = 'https://testcrud101.herokuapp.com/parametres';

  constructor(private http: HttpClient) { }

  getSettings() {
    return this.http.get(this.url);
  }

}
