import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { TableComponent } from '../table/table.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  constructor(public Auth: AuthService, private router: Router) { }

  ngOnInit() {
    if(!this.Auth.isLoggedIn){
      sessionStorage.setItem('loggedIn', 'false');    
    }
  }
  
  changeRoute(newRoute: string) {
    this.router.navigate([newRoute]);
  }
}

