
import { JwtModule } from '@auth0/angular-jwt';
import { BrowserModule, Title } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/students/signup/signup.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { AchievementsComponent } from "./components/students/achievements/achievements.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { SignupOrganizerComponent } from "./components/organizers/signup-organizer/signup-organizer.component";
import { NgxCaptchaModule } from "ngx-captcha";
import { ReactiveFormsModule } from "@angular/forms";
import { RecaptchaModule, RecaptchaFormsModule } from "ng-recaptcha";
import { EventService } from "./shared/events/event.service";
import { DashboardComponent } from "./components/students/dashboard/dashboard.component";
import { AuthGuard } from "./auth/auth.guard";
import { AuthService } from "./auth/auth.service";
import { EventsComponent } from "./components/students/events/events.component";
import { Signup2Component } from './components/students/signup2/signup2.component';
import { CommonsignupComponent } from './components/commonsignup/commonsignup.component';
import { OrganizerDashboardComponent } from './components/organizers/organizer-dashboard/organizer-dashboard.component';
import { EventsOrganizerComponent } from './components/organizers/events-organizer/events-organizer.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminDashComponent } from './components/admin/admin-dash/admin-dash.component';
import { SecurityComponent } from './components/students/security/security.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




export function tokenGetter() {
  return localStorage.getItem('access_token');
}



export const appRoutes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "homepage", component: HomePageComponent },
  { path: "login", component: LoginComponent, },
  { path: "signup", component: SignupComponent },
  { path: "achievements", component: AchievementsComponent, canActivate:[AuthGuard] },
  { path: "signupOrganizer", component: SignupOrganizerComponent },
  {path: "organizerdashboard", component: OrganizerDashboardComponent},
  {path: "eventsorg", component: EventsOrganizerComponent},
  {path: "admindash", component: AdminDashComponent},
  {path: "adminlog", component: AdminLoginComponent},
  {path:'security', component: SecurityComponent},
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate:[AuthGuard],
  },
  { path: "events", component: EventsComponent,canActivate:[AuthGuard], },
  { path: "signup2", component: Signup2Component, },
  {path: "commonsignup", component:CommonsignupComponent,},
  {path: "**", component: HomePageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AchievementsComponent,
    HomePageComponent,
    SignupOrganizerComponent,
    DashboardComponent,
    EventsComponent,
    Signup2Component,
    CommonsignupComponent,
    OrganizerDashboardComponent,
    EventsOrganizerComponent,
    AdminLoginComponent,
    AdminDashComponent,
    SecurityComponent
  ],
  imports: [
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4000'],
        blacklistedRoutes: ['localhost:4000/api/auth']
      }
    }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgxCaptchaModule,
    ReactiveFormsModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    BrowserAnimationsModule
  ],
  providers: [Title, EventService, AuthGuard, AuthService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
