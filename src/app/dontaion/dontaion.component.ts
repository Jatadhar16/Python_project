import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavbarColorService } from '../navbar-color.service';
import { BotService } from '../bot.service';
declare var $:any;

@Component({
  selector: 'app-dontaion',
  templateUrl: './dontaion.component.html',
  styleUrls: ['./dontaion.component.scss']
})
export class DontaionComponent implements OnInit {

  donationForm : any;
  cEmail : any;
  cBloodType : any;
  cAddress : any;

  constructor(private _NavbarColorService : NavbarColorService, private _BotService : BotService) {
    this.donationForm = new FormGroup({
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'bloodType' : new FormControl(),
      'address' : new FormControl()
    })
   }

   getForm(donationForm : FormGroup) {
     console.log(donationForm.value);
    this._BotService.stepTwo(donationForm.value).subscribe((data)=>{
      if(data){
        console.log(data);
      }
      else
      {
        console.log("error");
      }
    })
  }

  ngOnInit(): void {
    $('#particles').particleground({
      dotColor: '#ddd',
      lineColor: '#000'
    });

    this._NavbarColorService.changeNavColor.next('bg-reviveB');
  }

}
