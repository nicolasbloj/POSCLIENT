import { Injectable } from '@angular/core';
import {
  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,
  Router
} from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { User } from '../_model/person/user.model';
import { AuthService } from '../_service/auth.service';
import { PermissionService } from '../_service/permission.service';

@Injectable()
export class SimpleAuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private _authService: AuthService,
    private _permissionService: PermissionService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this._authService.isLoggedIn() && this._permissionService.userIsAdmin()) {
      return true;
    } else {
      this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
      return false;
    }

  }
}
