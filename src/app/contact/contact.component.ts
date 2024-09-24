import { Component, OnInit } from '@angular/core';
import { NavbarColorService } from '../navbar-color.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MailingService } from '../mailing.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm : any;

  constructor(private _NavbarColorService : NavbarColorService, private _MailingService : MailingService, private _Router : Router) {
    this.contactForm = new FormGroup({
      'name' : new FormControl(null, [Validators.required]),
      'email' : new FormControl(null, [Validators.required])
    })
  }

  getForm(contactForm : FormGroup) {
    this._MailingService.contact(contactForm.value).subscribe((data)=>{
      if(data){
        alert("Sent! check your mail for our response");
        this._Router.navigate(['/home']);
      }
      else
      {
        console.log(data);
      }
    })
  }

  ngOnInit(): void {
    this._NavbarColorService.changeNavColor.next('bg-revive');
  }

}
