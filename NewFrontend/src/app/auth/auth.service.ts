import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../shared/user/user.model';
var Token:JSON;
var logout:Boolean;
logout=true
@Injectable()
export class  AuthService {
 
  constructor(private http: HttpClient) { }

  login(user: User): Observable<boolean> {
    console.log('Reached login method')
    return this.http.post<JSON>('http://localhost:3000/login',user)
      .pipe(
        map(res => {
          localStorage.setItem('access_token', JSON.stringify(res))
          console.log(res)
          this.posttoken(res)
          console.log('Printed')
          return true;
        })
      );
  }

    posttoken(token:JSON) {
      console.log('Entered posttoken method')
      console.log(token)
      this.http.post('http://localhost:3000/dashboard', token )
    }
  logout() {
    this.http.post('http://localhost:3000/logout', logout)
    console.log(logout)
    localStorage.removeItem('access_token');
    
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
}