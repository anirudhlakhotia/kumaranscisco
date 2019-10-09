import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  isAuthenticated() {
    throw new Error("Method not implemented.");
  }
  loggedInStatus = false;
  constructor() {}
  setLoggedin(value: boolean) {
    this.loggedInStatus = value;
  }
  get isLoggedIn() {
    return this.loggedInStatus;
  }
  getUserDetails(emailid, password) {}
}
