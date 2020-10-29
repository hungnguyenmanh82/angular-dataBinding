import { Role, ROLES } from './roles';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding2-selection',
  templateUrl: './binding2-selection.component.html',
  styleUrls: ['./binding2-selection.component.scss'],
})
export class Binding2SelectionComponent implements OnInit {
  public roles: Role[] = ROLES;
  public roleSelect: Role;
  constructor() {}

  ngOnInit(): void {
    this.roleSelect = ROLES[1];
  }
}
