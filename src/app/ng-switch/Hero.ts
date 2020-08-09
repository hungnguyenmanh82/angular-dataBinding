export class Hero {
  id: number;
  name: string;
  emotion: string;

  constructor(id: number, name: string, emotion: string) {
    this.id = id;
    this.name = name;
    this.emotion = emotion;
  }
}

export const heroes: Hero[] = [
  new Hero(1, 'hungbeo', 'happy'),
  new Hero(2, 'Hunggay', 'sad'),
  new Hero(3, 'Long', 'confused'),
  new Hero(4, 'Thao', 'Magneta')
];



