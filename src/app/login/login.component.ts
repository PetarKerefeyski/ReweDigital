import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit {

  constructor(public Auth: AuthService, private router: Router) { }
  

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

    this.Auth.getUserDetails(username, password).subscribe( data => {
      for (let i = 0; i < data.length; i++) {
        if(data[i].username == username){
          if(data[i].password == password){
            this.router.navigate(['products']);
            this.Auth.setLoggedIn(true);
            return;
          } else {
            return;                       
          }
        }
      }
      return;   
    });
  }
}
