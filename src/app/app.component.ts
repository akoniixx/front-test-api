import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { server } from 'typescript';
import { ServicesService } from './services.service';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cityName: any;
  city: any[];
  constructor(public service: ServicesService) { }

  ngOnInit() {
    /* this.service.getAll().subscribe((res) => {
        console.log(res.data);
        this.city = res.data ;
        console.log(this.city);
    }); */

    /*  this.service.getName(this.nameCity).subscribe((res) => {
       console.log(res.data);
       this.city = res.data ;
       console.log(this.city);
   }); */

  }

  OnSubmit(form: NgForm) {
    this.cityName = form.value.name;
    this.service.getName(this.cityName).subscribe((res) => {
      this.city = res.data;
      console.log(this.city);
    });
  }

  title = 'api-app';

}
