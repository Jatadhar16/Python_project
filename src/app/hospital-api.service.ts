import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthUserDataService } from './auth-user-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HospitalApiService {

  constructor(private _HttpClient : HttpClient, private _AuthUserDataService : AuthUserDataService) {}

  getHospitals():Observable<any> {
    return this._HttpClient.get('https://revive-eg.herokuapp.com/allHospitals',
      {headers: new HttpHeaders({'token': this._AuthUserDataService.cUserToken.getValue()})}
    )
  }

  getHospitalByID(_id : string):Observable<any> {
    const body = {"_id": _id}
    return this._HttpClient.post('https://revive-eg.herokuapp.com/hospitalByID', body,
      {headers: new HttpHeaders({'token': this._AuthUserDataService.cUserToken.getValue()})}
    )
  }

  getDepartmentsByHosID(hospitalID : string):Observable<any> {
    return this._HttpClient.post('https://revive-eg.herokuapp.com/departmentsByHosID', hospitalID,
      {headers: new HttpHeaders({'token': this._AuthUserDataService.cUserToken.getValue()})}
    )
  }
  
  getbooked(_id : string):Observable<any> {
    const body = {"_id": _id}
    return this._HttpClient.post('https://revive-eg.herokuapp.com/booking', body,
      {headers: new HttpHeaders({'token': this._AuthUserDataService.cUserToken.getValue()})}
    )
  }

  getReviewsByHosID():Observable<any> {
    return this._HttpClient.get('https://revive-eg.herokuapp.com/allReviews')
  }
  
  getReviewAdded(addReviewData : any):Observable<any> {
    return this._HttpClient.post('https://revive-eg.herokuapp.com/addReview', addReviewData,
      {headers: new HttpHeaders({'token': this._AuthUserDataService.cUserToken.getValue()})}
    )
  }
}

