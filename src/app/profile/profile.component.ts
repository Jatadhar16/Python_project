import { Component, OnInit } from '@angular/core';
import { NavbarColorService } from '../navbar-color.service';
import { AuthUserDataService } from '../auth-user-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  cProfileName : any;
  cProfileEmail : any;
  cProfileAddress : any;
  cProfileAge : any;
  cProfilePhoneNumber : any;
  cProfilePicture : any;
  cProfileID : any;
  updateProfileForm : any;

  constructor(private _NavbarColorService : NavbarColorService, private _AuthUserDataService : AuthUserDataService, private _Router : Router) {

    this._AuthUserDataService.getUserByID(localStorage.getItem('userID')).subscribe((data)=>{
      if(data) {
        this.cProfileName = data.name;
        this.cProfileEmail = data.email;
        this.cProfileAddress = data.address;
        this.cProfileAge = data.age;
        this.cProfilePhoneNumber = data.phoneNumber;
        this.cProfilePicture = data.picture;
        this.cProfileID = data._id;
        console.log(this.cProfilePicture);
        
      }
      else {
        console.log("error");
      }
    })
    
    this.updateProfileForm = new FormGroup({
      'name' : new FormControl(null, [Validators.required]),
      'address' : new FormControl(null, [Validators.required]),
      'email' : new FormControl(null, [Validators.required]),
      'age' : new FormControl(null, [Validators.required]),
      'phoneNumber' : new FormControl(null, [Validators.required]),
      'picture' : new FormControl(null, [Validators.required])
    })
  }

  getUpdatedForm(_id : string, updateProfileForm : FormGroup) {    
    this._AuthUserDataService.getProfileUpdated(_id, updateProfileForm.value).subscribe((data)=>{
      if(data.message == 'success'){
        alert("updated");
        this._Router.navigate(['/home']);
      }
      else
      {
        alert(data)
      }
    })
  }
  
  updateProfile() {
    this.updateProfileForm.get('name').setValue(this.cProfileName);
    this.updateProfileForm.get('address').setValue(this.cProfileAddress);
    this.updateProfileForm.get('email').setValue(this.cProfileEmail);
    this.updateProfileForm.get('age').setValue(this.cProfileAge);
    this.updateProfileForm.get('phoneNumber').setValue(this.cProfilePhoneNumber);
    this.updateProfileForm.get('picture').setValue(this.cProfilePicture);
  }

  ngOnInit(): void {
    this._NavbarColorService.changeNavColor.next('bg-revive');
  }

}
