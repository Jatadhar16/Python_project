import { Component, OnInit } from '@angular/core';
import { NavbarColorService } from '../navbar-color.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private _NavbarColorService : NavbarColorService) { }

  ngOnInit(): void {
    this._NavbarColorService.changeNavColor.next('bg-revive');
  }

}
