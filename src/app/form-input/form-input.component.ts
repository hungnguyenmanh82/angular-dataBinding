import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {

  inputValue = "tuyet voi";
  constructor() { }

  ngOnInit(): void {
  }

  submitMessage(message:string){
    window.alert(message);
    this.inputValue = "tuyet";
  }
}
