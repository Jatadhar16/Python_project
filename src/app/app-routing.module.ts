import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CovidComponent } from './covid/covid.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { HomeComponent } from './home/home.component';
import { HospitaldetailsComponent } from './hospitaldetails/hospitaldetails.component';
import { HospitalmanageComponent } from './hospitalmanage/hospitalmanage.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { RoutingSecurityGuard } from './routing-security.guard'
import { DashboardComponent } from './dashboard/dashboard.component';
import { BloodCentersComponent } from './blood-centers/blood-centers.component';
import { BotChatComponent } from './bot-chat/bot-chat.component';
import { DontaionComponent } from './dontaion/dontaion.component';

const routes: Routes = [
  
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home', canActivate: [RoutingSecurityGuard], component: HomeComponent},
  {path: 'about', canActivate: [RoutingSecurityGuard], component: AboutComponent},
  {path: 'contact', canActivate: [RoutingSecurityGuard], component: ContactComponent},
  {path: 'hospitaldetails/:_id', canActivate: [RoutingSecurityGuard], component: HospitaldetailsComponent},
  {path: 'hospitalmanage', canActivate: [RoutingSecurityGuard], component: HospitalmanageComponent},
  {path: 'employeedetails', canActivate: [RoutingSecurityGuard], component: EmployeedetailsComponent},
  {path: 'dashboard', canActivate: [RoutingSecurityGuard], component: DashboardComponent},
  {path: 'profile', canActivate: [RoutingSecurityGuard], component: ProfileComponent},
  {path: 'covid', component: CovidComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},

  //revive-blood
  {path: 'bloodCenters', canActivate: [RoutingSecurityGuard], component: BloodCentersComponent},
  {path: 'botChat', canActivate: [RoutingSecurityGuard], component: BotChatComponent},
  {path: 'donation', canActivate: [RoutingSecurityGuard], component: DontaionComponent},
 
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
