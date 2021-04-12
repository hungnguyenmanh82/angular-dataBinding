import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diaglog',
  templateUrl: './diaglog.component.html',
  styleUrls: ['./diaglog.component.scss'],
})
export class DiaglogComponent implements OnInit {
  constructor() {}

  private modal: HTMLElement;
  ngOnInit(): void {
    //========================== Hidden Dialog ==================
    //  modal: là background full screen 100% bao quanh Dialog
    this.modal = document.getElementById('dialog-id');

    /**
     * Event sẽ ưu tiên xử lý ở Child html tag trc:
     * Vì thế khi click vào Dialog thì phần background sẽ ko bắt đc Event
     */
    window.onclick = (event) => {
      // khi click bên ngoài Dialog phần background Modal
      if (event.target == this.modal) {
        // 'none' phần html sẽ ẩn đi mà ko chiếm kích thước
        this.modal.style.display = 'none';
      }
    };
  }
}
