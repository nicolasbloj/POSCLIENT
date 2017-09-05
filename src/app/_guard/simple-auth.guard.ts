import { Injectable } from '@angular/core';
import {
  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { User } from '../_model/person/user.model';

@Injectable()
export class SimpleAuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const currentUser: User = JSON.parse(localStorage.getItem('user'));

    if (currentUser != null) {
      if (currentUser.username.toLocaleLowerCase() === 'admin' &&
          currentUser.password === 'admin') {
        // logged in so return true
        return true;
      }
    }

    // not logged in so redirect to home page with the return url
    this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
