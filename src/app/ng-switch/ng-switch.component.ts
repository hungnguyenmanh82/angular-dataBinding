import { Component, OnInit } from '@angular/core';
import { Hero, heroes } from './Hero';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss'],
})
export class NgSwitchComponent implements OnInit {
  hero: Hero;
  heroes:Hero[] = heroes;
  constructor() {}

  ngOnInit(): void {
    // select radio button
    this.hero = heroes[1];
  }
}
