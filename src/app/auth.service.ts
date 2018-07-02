import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface user {
  username: string,
  password: string,
  usertype: string
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private loggedInStatus = JSON.parse(sessionStorage.getItem('loggedIn') || 'false');  

  constructor(private http: HttpClient) { }

  getUserDetails(username, password) {
    return this.http.get<user[]>('/assets/data/users.json');
  }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
    sessionStorage.setItem('loggedIn', 'true');
  }

  get isLoggedIn() {
    return JSON.parse(sessionStorage.getItem('loggedIn') || this.loggedInStatus.toString());
  }

}
