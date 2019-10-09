import { AuthService } from './auth.service'
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthGuard implements CanActivate {
;

  constructor(private _authService: AuthService, private _router: Router, private   cookieService: CookieService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const cookieExists: boolean = this.cookieService.check('test');
    if (cookieExists) {
          return true;
      }
       
    if (!cookieExists)  {
  // navigate to login page
  this._router.navigate(['/login'])
  return false;
        }
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }

}
