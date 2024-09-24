import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { AuthUserDataService } from './auth-user-data.service'

@Injectable({
  providedIn: 'root'
})
export class MailingService {

  constructor(private _HttpClient : HttpClient, private _AuthUserDataService : AuthUserDataService) { }

  
  contact(contactFormData : string):Observable<any> {
    console.log(contactFormData);
    return this._HttpClient.post('https://revive-eg.herokuapp.com/contact', contactFormData,
      {headers: new HttpHeaders({'token': this._AuthUserDataService.cUserToken.getValue()})}
    )
  }
}
