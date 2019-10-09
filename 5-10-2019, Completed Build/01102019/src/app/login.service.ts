
import { User } from './user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  selectedUser: User ={
    firstname:'',
    lastname:'',
    email: '',
    password: '',
    DOB: '',
    phoneno:''
  };

  constructor(private http: HttpClient) { }

  postLogin(user: User){
    console.log(Object);
    return this.http.post('http://localhost:3000/login', user)
    
  }
}
