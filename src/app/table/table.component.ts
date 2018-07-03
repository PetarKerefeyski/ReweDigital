import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

interface productsResponse {
  data: any
  settings: object
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public source: LocalDataSource;
  public data: any;
  public settings: any;
  public isAdmin: boolean;

  constructor(private http: HttpClient, private Auth: AuthService) {
  }

  ngOnInit() {
    this.isAdmin = this.Auth.isAdmin;
    return this.http.get<productsResponse>('assets/data/products.json').subscribe(
      response => {
        console.log(response);
        this.data = response.data;
        this.settings = response.settings;        
        this.source = new LocalDataSource(this.data);
      });
  }
  

  onSearch(query: string) {
    if(!query.length){
      this.source = new LocalDataSource(this.data);
      return;
    }
    this.source.setFilter([
      {
        field: 'id',
        search: query
      },
      {
        field: 'name',
        search: query
      },
      {
        field: 'price',
        search: query
      },
      {
        field: 'rating',
        search: query
      }
    ], false);
  }
}
