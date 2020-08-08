import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding2',
  templateUrl: './binding2.component.html',
  styleUrls: ['./binding2.component.scss']
})
export class Binding2Component  {
  name: string = '';
  email: string ='';
  password: string = '';
  address:string='';

  setName() {
    this.name = 'Nancy';
  }

  setEmail(){
    this.email = "hung@gmail.com";
  }

  setPassword(){
    this.password = "password 123";
  }

  setUppercaseName(address:string){
    this.address = address.toUpperCase();
  }
}
