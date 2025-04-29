import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";


@Component({
  selector: 'app-root',
  imports: [CommonModule, HttpClientModule, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit  {

  title = 'Salom bu  Asosiy Componenta';
  Items:any

  constructor( private http: HttpClient) { }

  getPosts() {
    return    this.http.get('https://fakestoreapi.com/products');
  }


  ngOnInit(): void {
  
      this.getPosts().subscribe((data) => {

      console.log(data);

      this.Items = data
      
      });

  }



  



}
