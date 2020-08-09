export class Student {
  id: number;
  name: string;
  emotion: string;

  constructor(id: number, name: string, emotion: string) {
    this.id = id;
    this.name = name;
    this.emotion = emotion;
  }
}

export const students: Student[] = [
  new Student(1, 'hungbeo', 'happy'),
  new Student(2, 'Hunggay', 'sad'),
  new Student(3, 'Long', 'confused'),
  new Student(4, 'Thao', 'Magneta')
];



