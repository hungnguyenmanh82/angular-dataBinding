import { Student } from './Student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding2-radio',
  templateUrl: './binding2-radio.component.html',
  styleUrls: ['./binding2-radio.component.scss'],
})
export class Binding2RadioComponent implements OnInit {
  selectedStudent: Student;
  students: Student[] = [
    new Student(1, 'hungbeo', 'happy'),
    new Student(2, 'Hunggay', 'sad'),
    new Student(3, 'Long', 'confused'),
    new Student(4, 'Thao', 'Magneta'),
  ];

  constructor() {
    // init radio
    this.selectedStudent = this.students[1];

    //code này ko chạy vì so sánh con trỏ
    // this.selectedStudent = new Student(1, 'hungbeo', 'happy');
  }

  ngOnInit(): void {}
}
