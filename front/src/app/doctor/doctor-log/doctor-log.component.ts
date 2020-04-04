import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { DoctorJarwisService } from 'src/app/service/doctor-jarwis.service';
declare var $:any;

@Component({
  selector: 'app-doctor-log',
  templateUrl: './doctor-log.component.html',
  styleUrls: ['./doctor-log.component.css']
})
export class DoctorLogComponent implements OnInit {
  response: any;
  log: any;
  imgLink: any;
  dept_name: any;
  patient_data: any;

  patient_search: any;
  manual_search: any;

  
  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
    public actRoute: ActivatedRoute,
    private DocJarwis: DoctorJarwisService
  ) { }

  ngOnInit() {

    this.DocJarwis.profile().subscribe(
      data=>{
       
      this._res = data;
      (this._res.det[0].position_id == 3)? this._continue() : this.router.navigateByUrl('/');
      
    })
    
  }

  public _continue(): void {

    this.Jarwis.generalSettings().subscribe(
      data=>{
      this.response = data;      
      this.imgLink = this.response[0].app_url;
    })
    
    this.DocJarwis.displayAppointment().subscribe(
      data=>{
      this.response = data;
      this.dept_name = data[0].dept_name;     
      this.log = this.response;
      console.log(this.log)
    })

    //onkeyUp search
    $("#patient_data").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#patient-log .card").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });


  }

}
