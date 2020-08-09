import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {
  // *ngIf
  condition:boolean;  //khởi tạo ở đây sẽ ko update đc biến vào html
  condition2:boolean;
  condition3:boolean;

  // show/hidden
  isHidden:boolean;

  constructor() { }

  ngOnInit(): void {
    // khởi tạo ở đây sau khi DOM đc load => thì mới update đc vào html
    this.condition = true;
    this.condition2 = true;
    this.condition3 = true;
    this.isHidden = true;
  }

}
