import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private router: Router,
              private Auth: AuthService) { }

  ngOnInit() {
  }

  changeRoute(newRoute: string) {
    this.router.navigate([newRoute]);
  }
      
  logout() {
    this.Auth.logout();
  }
}
