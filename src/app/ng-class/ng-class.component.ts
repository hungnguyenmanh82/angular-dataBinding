import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent implements OnInit {
  /**
   * ngClass
   */
  isSaveable =  true;
  isSpecial = true;
  isModified = true;

  currentClasses: {};

  ngOnInit(): void {
    this.setCurrentClasses();
  }

  setCurrentClasses() {
    // JSON
    this.currentClasses =  {
      'saveable': this.isSaveable,
      'modified': this.isModified,
      'special':  this.isSpecial
    };
  }
}
