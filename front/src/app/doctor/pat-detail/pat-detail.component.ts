import { Component, OnInit } from '@angular/core';
import { DoctorJarwisService } from 'src/app/service/doctor-jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-pat-detail',
  templateUrl: './pat-detail.component.html',
  styleUrls: ['./pat-detail.component.css']
})
export class PatDetailComponent implements OnInit {

  response: any;
  appoints: any;
  response_p: any;
  id: string;

  public patient;
  public _res;

  constructor( 
    private DocJarwis: DoctorJarwisService,
    private Token: TokenService,
    private router: Router,
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

  public _continue() {
    this.actRoute.paramMap.subscribe((params => {
      this.id = params.get('id');      
      this.DocJarwis.getPatientData(this.id).subscribe(data=>{
        this.patient = data[0];
        console.log(this.patient)
      })
    }))
  }
  

}