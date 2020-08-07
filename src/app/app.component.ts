import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<div class="test"> {{title}}</div>',

  // CSS này chỉ có tác dùng với templateUrl
  styleUrls: ['./app.component.scss']
  // styles: ['.test{ width: 500px; height: 500px; background-color: greenyellow; color: red; }']
})
export class AppComponent {
  // biến này đc gọi ở template html
  title: string = 'app1-componentVariable';
  numberOfClick: number= 0;

  // function sẽ đc gọi ở template
  public clickButton(){
    this.numberOfClick++;
  }
}
