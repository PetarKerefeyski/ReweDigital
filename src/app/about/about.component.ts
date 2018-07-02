import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public Auth: AuthService) { }

  ngOnInit() {
    if(!this.Auth.isLoggedIn){
      sessionStorage.setItem('loggedIn', 'false');    
    }
    

  }

}
