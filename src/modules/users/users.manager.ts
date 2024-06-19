import { hsm } from "@dinamonetworks/hsm-dinamo";

export default class UsersManager {
  private users: string;
  private password: string;
  private permissions: hsm.enums.USER_PERMISSIONS[];

  constructor(
    users: string,
    password: string,
    permissions: hsm.enums.USER_PERMISSIONS[]
  ) {
    this.users = users;
    this.password = password;
    this.permissions = permissions;
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  getUsers(): User[] {
    return this.users;
  }
}
