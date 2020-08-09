import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.scss']
})
export class NgStyleComponent implements OnInit {

  islargeFont:boolean; // khởi tạo ở đây sẽ ko đc load vào DOM
  constructor() { }

  /**
   * Hàm này đc gọi sau khi html DOM đc create
   */
  ngOnInit(): void {
    // khởi tạo ở đây sẽ sinh event để Update DOM có liên quan tới biến này
    this.islargeFont = true;
  }

}
