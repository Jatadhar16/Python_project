import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BotService {

  constructor(private _HttpClient : HttpClient, private _Router : Router) { }
  
  stepOne(data : any):Observable<any> {
    return this._HttpClient.post("https://revive-eg.herokuapp.com/stepOne", data);
  }
  stepTwo(data : object):Observable<any> {
    return this._HttpClient.post("https://revive-eg.herokuapp.com/stepTwo", data);
  }
}
