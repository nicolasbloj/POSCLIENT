import { Injectable } from '@angular/core';
import { User } from '../_model/person/user.model';

@Injectable()
export class PermissionService {

  constructor() { }

  public userIsAdmin(): Boolean {

    const currentUser: User = JSON.parse(localStorage.getItem('user'));
    if (currentUser != null) {
      return (currentUser.username.toLocaleLowerCase() === 'admin');
    } else {
      return false;
    }

  }
}
