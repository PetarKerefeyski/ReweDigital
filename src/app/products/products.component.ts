import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  constructor(public Auth: AuthService) { }

  ngOnInit() {
    if(!this.Auth.isLoggedIn){
      this.logout();      
    }
  }  
  logout() {
    this.Auth.logout();
  }
}

