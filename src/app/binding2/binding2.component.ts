import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding2',
  templateUrl: './binding2.component.html',
  styleUrls: ['./binding2.component.scss']
})
export class Binding2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitMessage(message:string){
    window.alert(message);
  }
}
