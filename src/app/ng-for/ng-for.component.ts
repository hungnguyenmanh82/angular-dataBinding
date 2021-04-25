import { Component, OnInit } from '@angular/core';
import { Customer } from './Customer';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss'],
})
export class NgForComponent implements OnInit {
  items: Customer[] = [
    new Customer(1, 'hung', 14),
    new Customer(2, 'khien', 14),
    new Customer(3, 'kien', 14),
  ];

  newItems: Customer[] = [
    new Customer(1, 'hungChanged', 15),
    new Customer(2, 'khien Ko changeId', 16),
    new Customer(5, 'kienChanged', 14),
  ];

  customers: Customer[];

  custome1: Customer = new Customer(1, 'chân chính', 8);
  constructor() {}

  ngOnInit(): void {
    this.customers = this.items;
  }

  clickButton(name: string) {
    window.alert(name);
  }

  resetList() {
    this.customers = this.items;
  }

  changeNewArray() {
    this.customers = this.newItems;
  }

  changeItemOfArray() {
    // ngay cả change thành phần của biến vẫn đc update vào html (lạ thật)
    this.customers[0].name = 'aaaaa';
    this.customers[2].name = 'bbbbb';
  }

  /**
   *
   * @param index : là vị trí trong array của *ngFor
   * @param customer: là object của array tại vị trí index
   */
  trackById(index: number, customer: Customer): number {
    return customer.id;
  }

  /**
   *
   * @param index : là vị trí trong array của *ngFor
   * @param customer: là object của array tại vị trí index
   */
  trackByName(index: number, customer: Customer): string {
    return customer.name;
  }
}
