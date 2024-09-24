import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthUserDataService {

  cUserToken : any = new BehaviorSubject<any>(null);
  cUserID : any = null;
  cUserEmail : any = null;
  cUserName : any = null;
  cUserAddress : any = null;
  cUserAge : any = null;
  cUserPhoneNum : any = null;
  cUserRole : any = new BehaviorSubject<any>(null);

  constructor(private _HttpClient : HttpClient, private _Router : Router) {
    if(localStorage.getItem("userToken") != null && localStorage.getItem("userToken") != undefined)
    {
      this.cUserToken.next(localStorage.getItem("userToken"));
      this._Router.navigate(['/home'])
    }
    else
    {
      this._Router.navigate(['/login'])
    }
  }

  sendSignupData(signupData : object):Observable<any> {
    return this._HttpClient.post("https://revive-eg.herokuapp.com/signup", signupData);
  }

  sendLoginData(loginData : object):Observable<any> {
    return this._HttpClient.post("https://revive-eg.herokuapp.com/login", loginData);
  }
  
  saveUserData(userToken: string, userID: string, userEmail: string, userName: string, userAddress: string, userAge: number, userPhoneNum: string, userRole: string) {
    this.cUserToken.next(userToken);
    this.cUserID = userID;
    this.cUserEmail = userEmail;
    this.cUserName = userName;
    this.cUserAddress = userAddress;
    this.cUserAge = userAge;
    this.cUserPhoneNum = userPhoneNum;
    this.cUserRole.next(userRole);
  }

  getUserData():Observable<any> {
    return this._HttpClient.post('https://revive-eg.herokuapp.com/getUserData',
      {headers: new HttpHeaders({'token': this.cUserToken.getValue()})}
    )
  }

  getUserByID(_id:any):Observable<any> {
    const body = {"_id": _id}
    return this._HttpClient.post('https://revive-eg.herokuapp.com/userByID', body,
      {headers: new HttpHeaders({'token': this.cUserToken.getValue()})}
    )
  }  
  
  getProfileUpdated(_id : string, updateProfileData : any):Observable<any> {
    const body = {
      "_id": _id,
      "name": updateProfileData.name,
      "address": updateProfileData.address,
      "email": updateProfileData.email,
      "age": updateProfileData.age,
      "phoneNumber": updateProfileData.phoneNumber,
      "picture": updateProfileData.picture
    };
    console.log(body);
    return this._HttpClient.put('https://revive-eg.herokuapp.com/updateUser', body,
      {headers: new HttpHeaders({'token': this.cUserToken.getValue()})}
    )
  }

  getHosByLocation(location:any) {
    const body = {"location": location}
    return this._HttpClient.post('https://revive-eg.herokuapp.com/hospitalByName', body,
      {headers: new HttpHeaders({'token': this.cUserToken.getValue()})}
    )
  }

}
