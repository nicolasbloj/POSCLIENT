import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  public isLoggedIn(): Boolean {
    return localStorage.getItem('user') != null;
  }
}
