import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {
  // biến này đc gọi ở template html
  title: string = 'BindingComponent here:';
  numberOfClick: number= 0;

  // function sẽ đc gọi ở template
  public clickButton(){
    this.numberOfClick++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
