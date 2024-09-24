import { Component, OnInit } from '@angular/core';
import { NavbarColorService } from '../navbar-color.service';
import { BloodCenterApiService } from '../blood-center-api.service'

@Component({
  selector: 'app-blood-centers',
  templateUrl: './blood-centers.component.html',
  styleUrls: ['./blood-centers.component.scss']
})
export class BloodCentersComponent implements OnInit {

  allBloodCenters : any;

  constructor(private _NavbarColorService : NavbarColorService, private _BloodCenterApiService : BloodCenterApiService) {
    this._BloodCenterApiService.getBloodCenters().subscribe((data)=>{
      this.allBloodCenters = data;
      console.log(this.allBloodCenters);
    })
  }

  ngOnInit(): void {
    this._NavbarColorService.changeNavColor.next('bg-reviveB');
  }

}
