import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NavbarColorService } from '../navbar-color.service';
import { AuthUserDataService } from '../auth-user-data.service'
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-bot-chat',
  templateUrl: './bot-chat.component.html',
  styleUrls: ['./bot-chat.component.scss']
})
export class BotChatComponent implements OnInit {

  chatForm : any;
  message : any;
  reply : any;
  senderName : any;
  senderPic : any;

  constructor(private _NavbarColorService : NavbarColorService, private _AuthUserDataService : AuthUserDataService, private _Router : Router) {
    this.chatForm = new FormGroup({
      'message' : new FormControl()
    })
    
    this._AuthUserDataService.getUserByID(localStorage.getItem('userID')).subscribe((data)=>{
      if(data) {
        this.senderName = data.name;
        this.senderPic = data.picture;
      }
      else {
        console.log("error");
      }
    })
   }

   chat(chatForm : FormGroup) {
     this.message = chatForm.value.message;
     if(this.message == "Hey"){
       this.reply = "Hey " + this.senderName + " !";
     }
     else if(this.message == "Donation" || this.message == "I need donation" || this.message == "Help" || this.message == "I need blood"){
       this._Router.navigate(['/donation']);
     }
     else{
      this.reply = "Not detected Please Try Again With Simple Words"
     }
     this.chatForm.reset();
   }

  ngOnInit(): void {
    $('#particles').particleground({
      dotColor: '#ddd',
      lineColor: '#000'
    });

    this._NavbarColorService.changeNavColor.next('bg-reviveB');
  }

}
