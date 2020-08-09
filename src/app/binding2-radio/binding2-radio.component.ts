import { Component, OnInit } from '@angular/core';
import { Student, students } from './Hero';

@Component({
  selector: 'app-binding2-radio',
  templateUrl: './binding2-radio.component.html',
  styleUrls: ['./binding2-radio.component.scss']
})
export class Binding2RadioComponent implements OnInit {
  student: Student;
  students: Student[] = students;
  constructor() { }

  ngOnInit(): void {
    // init radio
    this.student = this.students[1];
  }

}
