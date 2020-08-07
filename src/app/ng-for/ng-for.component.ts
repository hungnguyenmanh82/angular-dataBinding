import { Component, OnInit } from '@angular/core';
import { Customer } from './Customer';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {
  customers: Customer[] = [new Customer("hung",14),new Customer("khien",14),new Customer("kien",14) ];

  constructor() { }

  ngOnInit(): void {
  }

  clickButton(name:string){
    window.alert(name);
  }

}
