import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HospitaldetailsComponent } from './hospitaldetails/hospitaldetails.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CovidComponent } from './covid/covid.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { HospitalmanageComponent } from './hospitalmanage/hospitalmanage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BloodCentersComponent } from './blood-centers/blood-centers.component';
import { BotChatComponent } from './bot-chat/bot-chat.component';
import { DontaionComponent } from './dontaion/dontaion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HospitaldetailsComponent,
    EmployeedetailsComponent,
    NotfoundComponent,
    CovidComponent,
    AboutComponent,
    ContactComponent,
    ProfileComponent,
    HospitalmanageComponent,
    DashboardComponent,
    BloodCentersComponent,
    BotChatComponent,
    DontaionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
