import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
contactform= new FormGroup({
  Firstname: new FormControl('',[Validators.required,Validators.minLength(5)]),
  Lastname: new FormControl('',[Validators.required,Validators.minLength(5)]),
  Email: new FormControl('',[Validators.required,Validators.minLength(5)]),
  Gender: new FormControl('',[Validators.required]),
  country: new FormControl('',[Validators.required]),
  IsMarried: new FormControl('',[Validators.requiredTrue]),
  Address:new FormGroup({
    City:new FormControl('',[Validators.required,Validators.minLength(3)]),
    Street:new FormControl('',[Validators.required,Validators.minLength(5)]),
    PinCode:new FormControl('',[Validators.required,Validators.minLength(6)]),
  })
});
get validatefirstname(){
  return this.contactform.get('Firstname')
}
get validateLastname(){
  return this.contactform.get('Lastname')
}
get validateEmail(){
  return this.contactform.get('Email')
}
get validateGender(){
  return this.contactform.get('Gender')
}
get validatecountry(){
  return this.contactform.get('country')
}
get validateIsMarried(){
  return this.contactform.get('IsMarried')
}
get validateCity(){
  return this.contactform.get('Address')?.get('City')
}
get validateStreet(){
  return this.contactform.get('Address.Street')
}
get validatePinCode(){
  return this.contactform.get('Address.PinCode')
}
AddContact(){
  console.log("details", this.contactform.value)
}
}
