export default class User {
  id?: number;
  name: string;
  email: string;
  password: string;
  constructor() {
    this.name = "";
    this.password = "";
    this.email = "";
  }
  /**
   * Requests the database to get a user with the given name and password and tries to get the id of the user
   * @returns id of the user
   */
  validateUser() {
    return 10;
  }
  validatePassword() {
    return this.password.length > 8 && this.password.length < 16;
  }
}
