import { Component, OnInit } from '@angular/core';
import { User } from '../_model/person/user.model';

@Component({
  selector: 'nab-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  pathLogo = '../../assets/images/logo.png';

  login = false;

  name = '';

  constructor() { }

  ngOnInit() {
    const currentUser: User = JSON.parse(localStorage.getItem('user'));
    if (currentUser != null) {
      this.login = true;
      this.name = currentUser.username;
    }
  }

  receiveLogin(user: User): void {
    if (user != null) {
      this.login = true;
      this.name = user.username;

    }
  }
  receiveLogout(): void {
    this.login = false;
  }
}
