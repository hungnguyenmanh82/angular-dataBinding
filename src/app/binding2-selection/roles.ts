export class Role {
  // cách viết tắt khai bao biến trên TypeScript
  constructor(public id: number, public name: string) {}
}

export const ROLES: Role[] = [
  new Role(1, 'admin'),
  new Role(2, 'moderate'),
  new Role(3, 'User'),
  new Role(4, 'Support'),
];
