import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-attribute',
  templateUrl: './html-attribute.component.html',
  styleUrls: ['./html-attribute.component.scss']
})
export class HtmlAttributeComponent implements OnInit {
  url = 'https://thepowerofsmiling.com/wp-content/uploads/2014/11/Smile-Icon.png';
  buttonState:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

}
