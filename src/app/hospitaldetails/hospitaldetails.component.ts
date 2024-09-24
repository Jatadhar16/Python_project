import { Component, OnInit } from '@angular/core';
import { NavbarColorService } from '../navbar-color.service';
import { ActivatedRoute } from '@angular/router';
import { HospitalApiService } from '../hospital-api.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hospitaldetails',
  templateUrl: './hospitaldetails.component.html',
  styleUrls: ['./hospitaldetails.component.scss']
})
export class HospitaldetailsComponent implements OnInit {

  cHosID: any;
  cUSERID: any;
  hosDetails: any;
  allDep: any;
  allReviews : any;
  addCommentForm : any;

  constructor(private _Router : Router, private _NavbarColorService : NavbarColorService, private _ActivatedRoute : ActivatedRoute, private _HospitalApiService : HospitalApiService) {
    this.cHosID = this._ActivatedRoute.snapshot.paramMap.get("_id");

    this._HospitalApiService.getHospitalByID(this.cHosID).subscribe((data)=>{
      this.hosDetails = data[0];
    });

    this._HospitalApiService.getDepartmentsByHosID(this.cHosID).subscribe((deps)=>{
      this.allDep = deps;
    })

    this._HospitalApiService.getReviewsByHosID().subscribe((reviews)=>{
      if(reviews){
        let x=[];
        for(let i=0;i<reviews.length;i++){
          if(reviews[i].hospitalID == this.cHosID){
            x.push(reviews[i]);
          }
          else{
            console.log("no comments found");
          }
        }
        this.allReviews = x;
      }
      else{
        console.log("error");
        
      }
    })

    this.cUSERID = localStorage.getItem('userID');
    this.addCommentForm = new FormGroup({
      'comment' : new FormControl(),
      'hospitalID': new FormControl(this.cHosID),
      'userID': new FormControl(this.cUSERID)
    })
  }

  booking(depID : string) {
    this._HospitalApiService.getbooked(depID).subscribe((data)=>{
      if(data) {
        alert("Booked !");
      }
      else {
        console.log(data);
      }
    })
  }

  addComment(rev : FormGroup){
    console.log(rev.value);
    this._HospitalApiService.getReviewAdded(rev.value).subscribe((data)=>{
      if(data == "Review added successfully"){
        console.log(data);
      }
      else
      {
        alert(data)
      }
    })
    this._Router.navigate(['/home']);
  }

  ngOnInit(): void {
    this._NavbarColorService.changeNavColor.next('bg-revive');
  }

}
