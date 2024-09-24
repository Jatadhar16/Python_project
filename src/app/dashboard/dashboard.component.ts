import { Component, OnInit } from '@angular/core';
import { NavbarColorService } from '../navbar-color.service';
import { DashboardManageService } from '../dashboard-manage.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  allHos : any;

  constructor(private _NavbarColorService : NavbarColorService, private _DashboardManageService : DashboardManageService) {
    this._DashboardManageService.gethome().subscribe((data)=>{
      if(data) {
        this.allHos = data;
      }
    })
  }

  ngOnInit(): void {
    this._NavbarColorService.changeNavColor.next('bg-revive');
  }

}
