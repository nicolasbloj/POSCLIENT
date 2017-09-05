import { Injectable } from '@angular/core';
import { User } from '../../_model/person/user.model';

@Injectable()
export class LoginService {

  constructor() { }

  public login(user: User): boolean {
    // call UserService.login. return true/false
    // Here go will to database and get all user's data.
    if ( (user.username === 'nico' || user.username === 'admin') &&
         (user.password === '1234' || user.password === 'admin') ) { // where.
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }
    return false;
  }

  public logout(): void {
    // call UserService.login. return true/false
    localStorage.removeItem('user');
  }

}
