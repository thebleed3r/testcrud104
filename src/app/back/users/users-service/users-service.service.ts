import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {


  url = ' https://testcrud101.herokuapp.com/utilisateurs';

  constructor(private http: HttpClient) {}

  getItems() {
    return this.http.get(this.url);
  }

  getItemById(_id) {
    return this.http.get(this.url + `/${_id}`);
  }

  addItem(data) {
    return this.http.post(this.url, data);
  }

  deleteItem(_id) {
    return this.http.delete(this.url + `/${_id}`);
  }

  updateItem(data) {
    return this.http.put(this.url + `/${data._id}` , JSON.stringify(data));
  }

}
