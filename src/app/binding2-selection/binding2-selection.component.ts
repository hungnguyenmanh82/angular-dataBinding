import { Role, ROLES } from './roles';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding2-selection',
  templateUrl: './binding2-selection.component.html',
  styleUrls: ['./binding2-selection.component.scss'],
})
export class Binding2SelectionComponent implements OnInit {
  public roles: Role[] = ROLES;

  /**
   * ứng dụng trong thực tế vd: Search all, thay vì để null
   */
  public roleAll: Role = new Role(-1, 'all');
  public roleSelect: Role;

  // test ngValue và [selected]
  public roleSelect2: Role = new Role(-1, 'invalid');

  constructor() {}

  ngOnInit(): void {
    this.roleSelect = ROLES[1];
  }
}
