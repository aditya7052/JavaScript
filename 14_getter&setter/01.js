class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    // return this._password.toUpperCase()
    return `${this._password}ad`;
  }
  set password(value) {
    this._password = value.toUpperCase();
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
}
const aditya = new User("aditya@gmail.com", "abc");
console.log(aditya.password);
console.log(aditya.email);
