import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { DoctorJarwisService } from 'src/app/service/doctor-jarwis.service';
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

  public _res;

  constructor( 
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private DocJarwis: DoctorJarwisService,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
    public actRoute: ActivatedRoute,
   ) { }

  ngOnInit() {
    this.DocJarwis.profile().subscribe(
      data=>{
      this._res = data;
      (this._res.det[0].position_id == 3)? this._continue() : this.router.navigateByUrl('/');
    })
  }

  public _continue():void {
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
