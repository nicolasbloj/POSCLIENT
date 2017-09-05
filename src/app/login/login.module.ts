import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './_service/login.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [LoginService],
  exports: [LoginComponent]
})
export class LoginModule { }
