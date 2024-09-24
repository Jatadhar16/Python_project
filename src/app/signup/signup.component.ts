import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthUserDataService } from '../auth-user-data.service';
import { Router } from '@angular/router';
import { NavbarColorService } from '../navbar-color.service';
declare var $:any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm : any;

  constructor(private _AuthUserDataService : AuthUserDataService, private _Router : Router, private _NavbarColorService : NavbarColorService) {
    this.signupForm = new FormGroup({
      'name' : new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'phoneNumber' : new FormControl(null, [Validators.required, Validators.pattern('^01')]),
      'age' : new FormControl(null, [Validators.required, Validators.min(16), Validators.max(60)]),
      'password' : new FormControl(null, [Validators.required, Validators.pattern('^[a-z][0-9]+$')])
    })
  }

  getForm(signupForm : FormGroup) {
    console.log(signupForm.value);
    this._AuthUserDataService.sendSignupData(signupForm.value).subscribe((data)=>{
      console.log(data);
      
      if(data.message == 'success'){
        this._Router.navigate(['/login'])
      }
      else
      {
        alert(data)
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
