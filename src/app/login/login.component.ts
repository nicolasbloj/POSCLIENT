import { NgForm } from '@angular/forms/src/directives';
import { Component, OnInit } from '@angular/core';

import { LoginService } from './_service/login.service';
import { User } from '../_model/person/user.model';

@Component({
  selector: 'nab-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login(value: any): void {

    console.log(value);

    const user: User = { username: value.user, password: value.pass };

    this.loginService.login(user);
  }

  logout(): void {
    this.loginService.logout();
  }
}
