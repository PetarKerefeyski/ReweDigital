import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface user {
  username: string,
  password: string,
  isAdmin: boolean
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private loggedInStatus = JSON.parse(sessionStorage.getItem('loggedIn') || 'false');  
  private adminStatus = JSON.parse(sessionStorage.getItem('isUserAdmin') || 'false');  

  constructor(private http: HttpClient,
              private router: Router) { }

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

  setAdminStatus(value: boolean) {
    this.loggedInStatus = value;
    sessionStorage.setItem('isUserAdmin', value.toString());
  }

  get isAdmin() {
    return JSON.parse(sessionStorage.getItem('isUserAdmin') || this.adminStatus.toString());
  }

  logout(){
    sessionStorage.setItem('isUserAdmin', 'false');
    sessionStorage.setItem('loggedIn', 'false');
    this.router.navigate(['login']);
  }

}
