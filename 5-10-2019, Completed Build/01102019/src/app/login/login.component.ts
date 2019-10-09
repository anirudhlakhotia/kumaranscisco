import { LoginService } from './../login.service';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';
import{AuthGuard} from '../auth.guard'
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {
  cookieValue = 'UNKNOWN';
  showSuccessmessage: boolean;
  serverErrormessage: string;
  protected aFormGroup: FormGroup;
  constructor(
    private cookieService: CookieService ,
    private formBuilder: FormBuilder,
    private Auth: AuthService,
    private router: Router,
    public loginService: LoginService
  ) {}

  ngOnInit() {
    this.cookieService.set( 'Test', 'Hello World' );
    this.cookieValue = this.cookieService.get('Test');
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ["", Validators.required]
    });
  }

  onSubmit(form: NgForm){
    
    this.loginService.postLogin(form.value).subscribe(
      res => {
        console.log('Auth is successful')
        this.cookieService.set( 'test', 'Hello World' );
        console.log(this.cookieService)
        this.router.navigate(['/dashboard'])
        this.showSuccessmessage = true;
        //setTimeout(() => this.showSuccessmessage = false, 3000);
        
      },
      err => {
        if (err.status === 422){
          this.serverErrormessage = err.error.join('<br/>');
          this.router.navigate(['/login'])
        }
        else{
          this.serverErrormessage = err.status
          this.router.navigate(['/login'])
        }
      }
    );


  }
  // loginUser(event) {
  //   const target = event.target;
  //   const emailid = target.querySelector("#emailid").value;
  //   const password = target.querySelector("#password").value;
  //   this.Auth.getUserDetails(emailid, password); //here we have to redirect this.router.navigate(['dashboard'])
  //   this.Auth.setLoggedin(true);
  //   console.log(emailid, password);
  // }
}
