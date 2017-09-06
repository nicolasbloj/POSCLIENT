import { UserService } from '../../user/_service/user.service';
import { Injectable } from '@angular/core';
import { User } from '../../_model/person/user.model';

import * as CryptoJS from 'crypto-js';

@Injectable()
export class LoginService {

  constructor(private _userService: UserService) { }

  public login(_username: string, _password: string): User {
    const user: User = this._userService.getUser(_username.toLocaleLowerCase(), _password);
    if (user != null) {
      // Encrypt the Passwort with Base64
      const key = CryptoJS.enc.Base64.parse('#base64Key#');
      const iv = CryptoJS.enc.Base64.parse('#base64IV#');

      // Impementing the Key and IV and encrypt the password
      const encrypted = CryptoJS.AES.encrypt(user.password, key, { iv: iv });

      user.password = encrypted.toString();

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
