import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from '../user/_service/user.service';
import { LoginComponent } from './login.component';
import { LoginService } from './_service/login.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    LoginService,
    UserService
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
