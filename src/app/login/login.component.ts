import { NgForm } from '@angular/forms/src/directives';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { LoginService } from './_service/login.service';
import { User } from '../_model/person/user.model';

declare var jQuery: any;

@Component({
  selector: 'nab-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // for login
  @Output()
  emitter = new EventEmitter<User>();
  // for logout
  @Output()
  emitter2 = new EventEmitter<any>();

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login(value: any): void {

    // const user: User = { username: value.user, password: value.pass };
    const user = this.loginService.login(value.user, value.pass);

    if (user != null) {
      this.emitter.emit(user);
    } else { alert('Usuario/contraseña incorrecto'); }

    jQuery('#login-modal').modal('toggle');
  }

  logout(): void {
    this.loginService.logout();
    this.emitter2.emit();
  }
}
