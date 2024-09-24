import { Component, OnInit } from '@angular/core';
import { NavbarColorService } from '../navbar-color.service';
import { DashboardManageService } from '../dashboard-manage.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-hospitalmanage',
  templateUrl: './hospitalmanage.component.html',
  styleUrls: ['./hospitalmanage.component.scss']
})
export class HospitalmanageComponent implements OnInit {

  allHos : any;
  addHosForm : any
  updateHosForm : any;
  hosData : any;
  updateHosID : any;

  constructor(private _NavbarColorService : NavbarColorService, private _DashboardManageService : DashboardManageService, private _Router : Router) {
    this._DashboardManageService.getAllHos().subscribe((data)=>{
      this.allHos = data;
    })

    this.addHosForm = new FormGroup({
      'name' : new FormControl(null, [Validators.required]),
      'location' : new FormControl(null, [Validators.required]),
      'phoneNumber' : new FormControl(null, [Validators.required]),
      'description' : new FormControl(null, [Validators.required]),
      'leet' : new FormControl(null, [Validators.required]),
      'lang' : new FormControl(null, [Validators.required]),
      'webURL' : new FormControl(null, [Validators.required])
    })
    
    this.updateHosForm = new FormGroup({
      'name' : new FormControl(null, [Validators.required]),
      'location' : new FormControl(null, [Validators.required]),
      'phoneNumber' : new FormControl(null, [Validators.required]),
      'description' : new FormControl(null, [Validators.required]),
      'picture' : new FormControl(null, [Validators.required]),
      'leet' : new FormControl(null, [Validators.required]),
      'lang' : new FormControl(null, [Validators.required]),
      'webURL' : new FormControl(null, [Validators.required])
    })
  }

  getForm(addHosForm : FormGroup) {
    this._DashboardManageService.getHosAdded(addHosForm.value).subscribe((data)=>{
      if(data.message == 'success'){
        alert("added");
      }
      else
      {
        alert(data)
      }
    })
  }

  getUpdatedForm(_id : string, updateHosForm : FormGroup) {    
    this._DashboardManageService.getHosUpdated(_id, updateHosForm.value).subscribe((data)=>{
      if(data.message == 'success'){
        alert("updated");
      }
      else
      {
        alert(data)
      }
    })
  }

  updateHos(_id : string) {
    this._DashboardManageService.getHosByID(_id).subscribe((data)=>{
      if(data) {
        this.hosData = data[0];
        this.updateHosForm.get('name').setValue(this.hosData.name);
        this.updateHosForm.get('location').setValue(this.hosData.location);
        this.updateHosForm.get('phoneNumber').setValue(this.hosData.phoneNumber);
        this.updateHosForm.get('description').setValue(this.hosData.description);
        this.updateHosForm.get('picture').setValue(this.hosData.picture);
        this.updateHosForm.get('leet').setValue(this.hosData.leet);
        this.updateHosForm.get('lang').setValue(this.hosData.lang);
        this.updateHosForm.get('webURL').setValue(this.hosData.webURL);
        this.updateHosID = _id;
      }
      else {
        console.log(data);
        
      }
    })
  }

  deleteHos(_id : string) {
    this._DashboardManageService.getHosDeleted(_id).subscribe((data)=>{
      if(data == "Deleted") {
        alert("Deleted Successfully");
        this._Router.navigate(['/home'])
      }
    })
  }

  ngOnInit(): void {
    this._NavbarColorService.changeNavColor.next('bg-revive');
  }

}
