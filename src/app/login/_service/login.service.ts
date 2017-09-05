import { UserService } from '../../user/_service/user.service';
import { Injectable } from '@angular/core';
import { User } from '../../_model/person/user.model';

@Injectable()
export class LoginService {

  constructor(private _userService: UserService) { }

  public login(_username: string, _password: string): User {
    const user: User = this._userService.getUser(_username.toLocaleLowerCase(), _password);
    if (user != null) {
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    }
    return null;
  }

  public logout(): void {
    // call UserService.login. return true/false
    localStorage.removeItem('user');
  }

}
