import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-attribute',
  templateUrl: './html-attribute.component.html',
  styleUrls: ['./html-attribute.component.scss'],
})
export class HtmlAttributeComponent implements OnInit {
  url =
    'https://thepowerofsmiling.com/wp-content/uploads/2014/11/Smile-Icon.png';
  isDisable: boolean; // khởi tạo ở đây ko có ý nghĩa
  isSpecial: boolean;
  constructor() {}

  ngOnInit(): void {
    // phải khởi tạo ở đây sau khi html DOM đã đc khởi tạo
    this.isDisable = true;
    this.isSpecial = true;
  }
}
