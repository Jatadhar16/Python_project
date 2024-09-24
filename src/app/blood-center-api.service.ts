import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthUserDataService } from './auth-user-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BloodCenterApiService {

  constructor(private _HttpClient : HttpClient, private _AuthUserDataService : AuthUserDataService) { }

  getBloodCenters():Observable<any> {
    return this._HttpClient.get('https://revive-eg.herokuapp.com/allBloodCenters',
      {headers: new HttpHeaders({'token': this._AuthUserDataService.cUserToken.getValue()})}
    )
  }

}
