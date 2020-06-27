import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get("http://localhost:3000/users");
  }
  deleteUsers(id) {
    return this.http.delete(`http://localhost:3000/users/${id}`)
  }
}
