import { UserService } from './../../../shared/user/user.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[UserService]
})
export class SignupComponent implements OnInit {
  Captchaval:boolean=false;
  showSuccessmessage: boolean;
  serverErrormessage: string;
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    if(captchaResponse.length>0){
      this.Captchaval=true;
    }
    else{
      this.Captchaval=false;
    }
  
  
  
  }


  constructor(public userService: UserService , private router:Router) { }

  ngOnInit() {

  }
  onSubmit(form: NgForm){
    this.userService.postUser(form.value).subscribe(
      res => {
        // this.showSuccessmessage = true;
        // setTimeout(() => this.showSuccessmessage = false, 3000);
        console.log(res)
        this.router.navigate(['/login'])
      },
      err => {
        if (err.status === 422){
          // this.serverErrormessage = err.error.join('<br/>');
          console.log(422);
        }
        else{
          // this.serverErrormessage = "Something went wrong"
          console.log('error')
        }
      }
    );


  }
}
