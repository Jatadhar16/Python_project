import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthUserDataService } from '../auth-user-data.service';
import { Router } from '@angular/router';
import { NavbarColorService } from '../navbar-color.service';
declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : any;
  role : any;

  constructor(private _AuthUserDataService : AuthUserDataService, private _Router : Router, private _NavbarColorService : NavbarColorService) {
    this.loginForm = new FormGroup({
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'password' : new FormControl(null, [Validators.required, Validators.pattern('^[a-z][0-9]+$')])
    })
  }

  getForm(loginForm : FormGroup) {
    this._AuthUserDataService.sendLoginData(loginForm.value).subscribe((data)=>{
      if(data.token && data.token != null && data.token != undefined){
        localStorage.setItem('userToken', data.token);
        localStorage.setItem('userID', data._id);
        this._AuthUserDataService.saveUserData(data.token, data._id, data.email, data.name, data.address, data.age, data.phoneNumber, data.role)
        this._Router.navigate(['/home']);
      }
      else
      {
        console.log(data);
      }
    })
  }

  ngOnInit() {
    $('#particles').particleground({
      dotColor: '#fff',
      lineColor: '#000'
    });
    
    this._NavbarColorService.changeNavColor.next('bg-transparent');
  }

}
