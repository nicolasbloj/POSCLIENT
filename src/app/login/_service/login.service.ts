import { Injectable } from '@angular/core';
import { User } from '../../_model/person/user.model';

@Injectable()
export class LoginService {

  constructor() { }

  public login(user: User): boolean {
    // call UserService.login. return true/false
    console.log('USER-LOGIN');
    console.log(user);


    localStorage.setItem('user', JSON.stringify(user));

    return true;
  }

  public logout(): void {
    // call UserService.login. return true/false

localStorage.removeItem('user');
  }

}
