import { Component, OnInit } from '@angular/core';
import { Student, STUDENTS } from './Student';

@Component({
  selector: 'app-binding2-radio',
  templateUrl: './binding2-radio.component.html',
  styleUrls: ['./binding2-radio.component.scss'],
})
export class Binding2RadioComponent implements OnInit {
  selectedStudent: Student;
  students: Student[] = STUDENTS;
  constructor() {}

  ngOnInit(): void {
    // init radio
    this.selectedStudent = this.students[1];
  }
}
