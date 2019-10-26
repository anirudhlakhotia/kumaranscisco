
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { DatasharingService } from './../../../shared/datasharing.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: any;
  
  constructor(private auth: AuthService, private router: Router, private data: DatasharingService ) { }

  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }
  ngOnInit() {
    this.data.currentName.subscribe((res: Response) => {
      this.username = res;
      console.log(this.username);
    });

}
}
