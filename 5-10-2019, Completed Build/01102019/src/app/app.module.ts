

import { BrowserModule, Title } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { AchievementsComponent } from "./achievements/achievements.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { SignupOrganizerComponent } from "./signup-organizer/signup-organizer.component";
import { NgxCaptchaModule } from "ngx-captcha";
import { ReactiveFormsModule } from "@angular/forms";
import { RecaptchaModule, RecaptchaFormsModule } from "ng-recaptcha";
import { SlideshowModule } from "ng-simple-slideshow";
import { EventService } from "./event.service";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthGuard } from "./auth.guard";
import { AuthService } from "./auth.service";
import { EventsComponent } from "./events/events.component";
import { Signup2Component } from './signup2/signup2.component';
import { OrganizerComponent } from './organizer/organizer.component';
export const appRoutes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "homepage", component: HomePageComponent },
  { path: "login", component: LoginComponent, },
  { path: "signup", component: SignupComponent },
  { path: "achievements", component: AchievementsComponent },
  { path: "signupOrganizer", component: SignupOrganizerComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate:[AuthGuard],
  },
  { path: "events", component: EventsComponent,canActivate:[AuthGuard], },
  { path: "signup2", component: Signup2Component, canActivate:[AuthGuard],},
  { path: "organizer", component: OrganizerComponent, canActivate:[AuthGuard],}
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
    OrganizerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgxCaptchaModule,
    ReactiveFormsModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    SlideshowModule
  ],
  providers: [Title, EventService, AuthGuard, AuthService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
