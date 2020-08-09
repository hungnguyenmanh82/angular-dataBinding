import { Component, OnInit } from '@angular/core';
import { Hello } from './Hello';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {
  // biến này đc gọi ở template html
  title: string = 'binding.Component here:';
  numberOfClick: number= 0;

  user:Hello = new Hello(1,'Hungbeo', 40);

  // function sẽ đc gọi ở template
  public clickButton(){
    this.numberOfClick++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
