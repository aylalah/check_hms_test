import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent implements OnInit {
  response: Object;
  appoints: any;
  department: any;
  pat: any;
  count: any;
  imgLink: any;

  constructor( 
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
    public actRoute: ActivatedRoute,
   ) { }

  ngOnInit() {

    this.Jarwis.countAppointment().subscribe(
      data=>{
      this.count = data;      
    })

    this.Jarwis. generalSettings().subscribe(
      data=>{
      this.response = data;      
      this.imgLink = this.response[0].app_url;
    })
    
    this.Jarwis.displayDeptAppointment().subscribe(
      data=>{
      this.response = data;      
      this.appoints = this.response;
    })

    // this.Jarwis.displayDepartments().subscribe(
    //   data=>{
    //   this.response = data;
    //   this.department = this.response
    // })
    // this.Jarwis.displayCustomer().subscribe(
    //   data=>{
    //   this.response = data;      
    //   this.pat = this.response   
    // })
  }
  

}
