import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding2',
  templateUrl: './binding2.component.html',
  styleUrls: ['./binding2.component.scss']
})
export class Binding2Component  {
  name: string = '';

  setValue() {
    this.name = 'Nancy';
  }


}
