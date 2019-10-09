import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(  private cookieService: CookieService ) { }
Logout(){
  this.cookieService.delete('test');
}
  ngOnInit() {
  }

}
