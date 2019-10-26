import { OrganizeruserService } from './../../../shared/organizeruser/organizeruser.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-organizer',
  templateUrl: './signup-organizer.component.html',
  styleUrls: ['./signup-organizer.component.css'],
  providers:[OrganizeruserService],
})
export class SignupOrganizerComponent implements OnInit {
  
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
  constructor(public organizeruserService: OrganizeruserService , private router:Router) { }

  ngOnInit() {

  }
  onSubmit(form: NgForm){
    this.organizeruserService.postOrgUser(form.value).subscribe(
      res => {
        this.showSuccessmessage = true;
        setTimeout(() => this.showSuccessmessage = false, 3000);
        this.router.navigate(['/login'])
      },
      err => {
        if (err.status === 422){
          this.serverErrormessage = err.error.join('<br/>');
        }
        else
        {
          this.serverErrormessage = ("Work please");
         
        }
      }
    );


  }
}

