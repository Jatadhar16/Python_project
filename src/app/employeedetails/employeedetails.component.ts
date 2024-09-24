import { Component, OnInit } from '@angular/core';
import { NavbarColorService } from '../navbar-color.service';
import { DashboardManageService } from '../dashboard-manage.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.scss']
})
export class EmployeedetailsComponent implements OnInit {

  allEmp : any;
  addEmpForm : any
  updateEmpForm : any;
  EmpData : any;
  updateEmpID : any;

  constructor(private _NavbarColorService : NavbarColorService, private _DashboardManageService : DashboardManageService, private _Router : Router) {
    this._DashboardManageService.getAllEmp().subscribe((data)=>{
      this.allEmp = data;
    })

    this.addEmpForm = new FormGroup({
      'email' : new FormControl(null, [Validators.required]),
      'name' : new FormControl(null, [Validators.required]),
      'jobTitle' : new FormControl(null, [Validators.required]),
      'salary' : new FormControl(null, [Validators.required]),
      'address' : new FormControl(null, [Validators.required]),
      'picture' : new FormControl(null, [Validators.required]),
      'age' : new FormControl(null, [Validators.required]),
      'phoneNumber' : new FormControl(null, [Validators.required]),
      'password' : new FormControl(null, [Validators.required]),
      'role' : new FormControl(null, [Validators.required])
    })
    
    this.updateEmpForm = new FormGroup({
      'email' : new FormControl(null, [Validators.required]),
      'name' : new FormControl(null, [Validators.required]),
      'jobTitle' : new FormControl(null, [Validators.required]),
      'salary' : new FormControl(null, [Validators.required]),
      'address' : new FormControl(null, [Validators.required]),
      'picture' : new FormControl(null, [Validators.required]),
      'age' : new FormControl(null, [Validators.required]),
      'phoneNumber' : new FormControl(null, [Validators.required]),
      'password' : new FormControl(null, [Validators.required]),
      'role' : new FormControl(null, [Validators.required])
    })
  }

  getForm(addEmpForm : FormGroup) {
    this._DashboardManageService.getEmpAdded(addEmpForm.value).subscribe((data)=>{
      if(data.message == 'success'){
        alert("added");
      }
      else
      {
        alert(data)
      }
    })
  }

  getUpdatedForm(_id : string, updateEmpForm : FormGroup) {    
    this._DashboardManageService.getEmpUpdated(_id, updateEmpForm.value).subscribe((data)=>{
      if(data.message == 'success'){
        alert("updated");
      }
      else
      {
        alert(data)
      }
    })
  }

  updateEmp(_id : string) {
    this._DashboardManageService.getEmpByID(_id).subscribe((data)=>{
      if(data) {
        this.EmpData = data[0];
        this.updateEmpForm.get('email').setValue(this.EmpData.email);
        this.updateEmpForm.get('name').setValue(this.EmpData.name);
        this.updateEmpForm.get('jobTitle').setValue(this.EmpData.jobTitle);
        this.updateEmpForm.get('salary').setValue(this.EmpData.salary);
        this.updateEmpForm.get('address').setValue(this.EmpData.address);
        this.updateEmpForm.get('picture').setValue(this.EmpData.picture);
        this.updateEmpForm.get('age').setValue(this.EmpData.age);
        this.updateEmpForm.get('phoneNumber').setValue(this.EmpData.phoneNumber);
        this.updateEmpForm.get('password').setValue(this.EmpData.password);
        this.updateEmpForm.get('role').setValue(this.EmpData.role);
        this.updateEmpID = _id;
      }
      else {
        console.log(data);
      }
    })
  }

  deleteEmp(_id : string) {
    this._DashboardManageService.getEmpDeleted(_id).subscribe((data)=>{
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

