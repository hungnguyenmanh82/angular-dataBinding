import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-keyup',
  templateUrl: './input-keyup.component.html',
  styleUrls: ['./input-keyup.component.scss']
})
export class InputKeyupComponent implements OnInit {
  enterMessage: string = '';
  blurMessage:string = '';
  constructor() { }

  ngOnInit(): void {
  }

  onEnter(message: string) { // with type info
    this.enterMessage = message;
  }

  /**
   * sẽ đc goi khi Edit input từ focus chuyển sang unfocus by clicking elsewhere
   * @param message
   */
  onBlur(message: string) { // with type info
    this.blurMessage = message;
  }
}
