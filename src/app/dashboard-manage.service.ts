import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthUserDataService } from './auth-user-data.service';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DashboardManageService {

  constructor(private _HttpClient : HttpClient, private _AuthUserDataService : AuthUserDataService) { }

  // Employee Dashboard
  
  getAllHos():Observable<any> {
    return this._HttpClient.get('https://revive-eg.herokuapp.com/allHospitalEmp',
      {headers: new HttpHeaders({'token': this._AuthUserDataService.cUserToken.getValue()})}
    )
  }

  getHosAdded(addHosData : object):Observable<any> {
    return this._HttpClient.post('https://revive-eg.herokuapp.com/addHospital', addHosData,
      {headers: new HttpHeaders({'token': this._AuthUserDataService.cUserToken.getValue()})}
    )
  }

  getHosByID(_id : string):Observable<any> {
    const body = {"_id": _id}
    return this._HttpClient.post('https://revive-eg.herokuapp.com/getHosByID', body,
      {headers: new HttpHeaders({'token': this._AuthUserDataService.cUserToken.getValue()})}
    )
  }
  
  getHosUpdated(_id : string, updatedHosData : any):Observable<any> {
    const body = {
      "_id": _id,
      "name": updatedHosData.name,
      "description": updatedHosData.description,
      "picture": updatedHosData.picture,
      "location": updatedHosData.location,
      "phoneNumber": updatedHosData.phoneNumber,
      "leet": updatedHosData.leet,
      "lang": updatedHosData.lang,
      "webURL": updatedHosData.webURL
    };
    console.log(body);
    return this._HttpClient.put('https://revive-eg.herokuapp.com/updateHospital', body,
      {headers: new HttpHeaders({'token': this._AuthUserDataService.cUserToken.getValue()})}
    )
  }

  getHosDeleted(_id : string):Observable<any> {
    return this._HttpClient.delete('https://revive-eg.herokuapp.com/deleteHospital',
      {headers: new HttpHeaders({'token': this._AuthUserDataService.cUserToken.getValue(), '_id': _id})}
    )
  }  

  // Admin Dashboard

  getAllEmp():Observable<any> {
    return this._HttpClient.get('https://revive-eg.herokuapp.com/allEmployee',
      {headers: new HttpHeaders({'token': this._AuthUserDataService.cUserToken.getValue()})}
    )
  }

  getEmpAdded(addEmpData : object):Observable<any> {
    console.log(addEmpData);
    
    return this._HttpClient.post('https://revive-eg.herokuapp.com/addEmployee', addEmpData,
      {headers: new HttpHeaders({'token': this._AuthUserDataService.cUserToken.getValue()})}
    )
  }

  getEmpByID(_id : string):Observable<any> {
    const body = {"_id": _id}
    return this._HttpClient.post('https://revive-eg.herokuapp.com/getEmpByID', body,
      {headers: new HttpHeaders({'token': this._AuthUserDataService.cUserToken.getValue()})}
    )
  }
  
  getEmpUpdated(_id : string, updatedEmpData : any):Observable<any> {
    const body = {
      "_id": _id,
      "email": updatedEmpData.email,
      "name": updatedEmpData.name,
      "jobTitle": updatedEmpData.jobTitle,
      "salary": updatedEmpData.salary,
      "address": updatedEmpData.address,
      "picture": updatedEmpData.picture,
      "age": updatedEmpData.age,
      "phoneNumber": updatedEmpData.phoneNumber,
      "password": updatedEmpData.password,
      "role": updatedEmpData.role
    };
    console.log(body);
    return this._HttpClient.put('https://revive-eg.herokuapp.com/updateEmployee', body,
      {headers: new HttpHeaders({'token': this._AuthUserDataService.cUserToken.getValue()})}
    )
  }

  getEmpDeleted(_id : string):Observable<any> {
    return this._HttpClient.delete('https://revive-eg.herokuapp.com/deleteEmployee',
      {headers: new HttpHeaders({'token': this._AuthUserDataService.cUserToken.getValue(), '_id': _id})}
    )
  }

  // Employee & Admin Home Page

  gethome():Observable<any> {
    if(this._AuthUserDataService.cUserRole.getValue() == "admin") {
      return this._HttpClient.get('https://revive-eg.herokuapp.com/hospitalDashboard',
      {headers: new HttpHeaders({'token': this._AuthUserDataService.cUserToken.getValue()})}
      )
    }
    else {
      return this._HttpClient.get('https://revive-eg.herokuapp.com/allHospitalEmp',
      {headers: new HttpHeaders({'token': this._AuthUserDataService.cUserToken.getValue()})}
      )
    }
  }

}
