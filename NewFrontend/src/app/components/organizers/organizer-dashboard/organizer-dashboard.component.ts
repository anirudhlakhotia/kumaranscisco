import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-organizer-dashboard',
  templateUrl: './organizer-dashboard.component.html',
  styleUrls: ['./organizer-dashboard.component.css']
})
export class OrganizerDashboardComponent implements OnInit {

  constructor(  private cookieService: CookieService ) { }
  Logout(){
    this.cookieService.delete('test');
  }
    ngOnInit() {
    }
  
  }
  