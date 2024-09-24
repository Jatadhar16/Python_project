import { Component, OnInit } from '@angular/core';
import { AuthUserDataService } from '../auth-user-data.service';
import { NavbarColorService } from '../navbar-color.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogin : boolean = false;
  isAdmin : boolean = false;
  isEmp : boolean = false;
  navColor : any;

  constructor(private _AuthUserDataService : AuthUserDataService, private _Router : Router, private _HttpClient : HttpClient, private _NavbarColorService : NavbarColorService) {
    this._AuthUserDataService.cUserToken.subscribe((data:any)=>{
      if(data == null)
      {
        this.isLogin = false;
      }
      else
      {
        this.isLogin = true;
      }
    })

    this._AuthUserDataService.cUserRole.subscribe((data:any)=>{
      if(data == "employee" || localStorage.getItem('role') == "employee") {
        console.log("employee");
        localStorage.setItem('role', "employee");
        this.isEmp = true;
      }
      else if(data == "admin" || localStorage.getItem('role') == "admin") {
        console.log("admin");
        localStorage.setItem('role', "admin");
        this.isAdmin = true;
      }
      else {
        console.log(data);
      }

      this._NavbarColorService.changeNavColor.subscribe((color)=>{
        this.navColor = color;
      });
    })
  }

  logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('role');
    localStorage.removeItem('userID');
    this._AuthUserDataService.cUserToken.next(null);
    this._AuthUserDataService.cUserRole.next(null);
    this._Router.navigate(['/login']);
  }

  ngOnInit() {}
  

}