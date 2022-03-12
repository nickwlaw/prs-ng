export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  reviewer: boolean;
  admin: boolean;

  constructor(id: number, username: string, password: string,
    firstName: string, lastName: string, phone: string,
    email: string, reviewer: boolean, admin: boolean) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.reviewer = reviewer;
    this.admin = admin;
  }
}
