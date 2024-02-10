import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent implements OnInit {

  ngOnInit(): void {
  this.Employee= {
    Firstname:"",
    LastName:"v",
    Email:"maripvm14@gamil.com",
    Married:true,
    Gender:"Male",
    Country:"2",
    Address:{
      Street:"10/13 old police station street",
      City:"Rasipuram",
      Pincode:"637505"
    }
    
  }
  }

CountryList:Country[]=[
new Country('1','India'),
new Country('2','Pakistan'),
new Country('3','USA')
]
Employee!:Employee;

Save=(fromdata:NgForm)=>{
console.log(fromdata.value)
}
}


export class Country{
  Id:string;
  Name:String;
  constructor(id:string,Name:string) {
    this.Id=id;
    this.Name=Name;
  }
}

class Employee{
  Firstname!:string;
  LastName!:string;
  Email!:string;
  Gender!:string;
  Country!:string;
  Married!:boolean
  Address!:{
    City:string;
    Street:String;
    Pincode:String;
  }
}