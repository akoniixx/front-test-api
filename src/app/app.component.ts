import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { server } from 'typescript';
import { ServicesService } from './services.service';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data: any;
  
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

    
    console.log( form.value.district);
    if (form.value.name!=""){
      this.data = form.value.name;
      this.service.getName(this.data).subscribe((res) => {
        this.city = res.data;
        console.log(this.city);
      });
    }else if(form.value.countyCode!=""&&form.value.name==""&&form.value.district==""){
      this.data = form.value.countyCode;
    this.service.getCountryCode(this.data).subscribe((res) => {
      this.city = res.data;
      console.log(this.city);
    });
    }else{
      this.data = form.value.district;
    this.service.getDistrict(this.data).subscribe((res) => {
      this.city = res.data;
      console.log(this.city);
    });
    }

    

      /* this.data = form.value.name;
      this.service.getName(this.data).subscribe((res) => {
        this.city = res.data;
        console.log(this.city);
      });  */   

  }

  title = 'api-app';

}
