import { Component, OnInit } from '@angular/core';
import { NavbarColorService } from '../navbar-color.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss']
})
export class CovidComponent implements OnInit {

  constructor(private _NavbarColorService : NavbarColorService) { }

  ngOnInit(): void {
    this._NavbarColorService.changeNavColor.next('bg-revive');
  }

}
