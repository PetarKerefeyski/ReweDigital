import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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

  

  constructor(private http: HttpClient) { }

  public data: any;
  public settings: any;

  ngOnInit() {
    return this.http.get<productsResponse>('assets/data/products.json').subscribe(
      response => {
        console.log(response);
        this.data = response.data;
        this.settings = response.settings;
      }
    )
  }
  

 
  
  

}
