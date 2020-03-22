import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import { DoctorJarwisService } from 'src/app/service/doctor-jarwis.service';

@Component({
  selector: 'app-refill',
  templateUrl: './refill.component.html',
  styleUrls: ['./refill.component.css']
})
export class RefillComponent implements OnInit {
  response: Object;
  refill: Object;
  public _res;

  constructor(
    private http: HttpClient,
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
    public actRoute: ActivatedRoute,
    private DocJarwis: DoctorJarwisService
  ) { }

  ngOnInit() {
    //checking if router is  pharmacy
    this.DocJarwis.profile().subscribe(
     data=>{
     this._res = data;
     (this._res.det[0].position_id == 3)? this._continue() : this.router.navigateByUrl('/');
   })  
 }

  public _continue():void {
    this.Jarwis.displayRefill().subscribe(
      data=>{
      this.response = data;      
      this.refill= this.response   
    })
  }

  voucher(){
    this.router.navigateByUrl('/Admin/(side:refill-details');
    this.ngOnInit();
  }

}
