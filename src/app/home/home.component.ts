import { Component, OnInit } from '@angular/core';
import { HospitalApiService } from '../hospital-api.service';
import { NavbarColorService } from '../navbar-color.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthUserDataService } from '../auth-user-data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allHos : any;
  searchLocationForm : any;

  constructor(private _HospitalApiService : HospitalApiService,private _AuthUserDataService : AuthUserDataService, private _NavbarColorService : NavbarColorService) {
    this._HospitalApiService.getHospitals().subscribe((data)=>{
      this.allHos = data
    })

    this.searchLocationForm = new FormGroup({
      'keyword' : new FormControl(null, [Validators.required])
    })
  }

  getForm(searchLocationForm : FormGroup) {
    this._AuthUserDataService.getHosByLocation(searchLocationForm.value.keyword).subscribe((data)=>{
      if(data){
        this.allHos = data;
      }
      else
      {
        console.log("failed");
      }
    })
  }

  ngOnInit(): void {
    this._NavbarColorService.changeNavColor.next('bg-transparent');
  }

}
