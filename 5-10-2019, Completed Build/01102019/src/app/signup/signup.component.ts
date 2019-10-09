import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[UserService]
})
export class SignupComponent implements OnInit {
  showSuccessmessage: boolean;
  serverErrormessage: string;
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }


  constructor(public userService: UserService) { }

  ngOnInit() {

  }
  onSubmit(form: NgForm){
    this.userService.postUser(form.value).subscribe(
      res => {
        this.showSuccessmessage = true;
        setTimeout(() => this.showSuccessmessage = false, 3000);
      },
      err => {
        if (err.status === 422){
          this.serverErrormessage = err.error.join('<br/>');
        }
        else{
          this.serverErrormessage = "Something went wrong"
        }
      }
    );


  }
}
