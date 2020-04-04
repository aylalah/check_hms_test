import { Component, OnInit } from '@angular/core';
import { DoctorJarwisService } from 'src/app/service/doctor-jarwis.service';
import { JarwisService } from 'src/app/service/jarwis.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-success-appointments',
  templateUrl: './success-appointments.component.html',
  styleUrls: ['./success-appointments.component.css']
})
export class SuccessAppointmentsComponent implements OnInit {

  public _res;
  public dept_name;
  public log;
  response: any
  imgLink: any

  constructor(
    private DocJarwis: DoctorJarwisService,
    private Jarwis: JarwisService,
    public router: Router
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
    
    this.DocJarwis.displaySuccessAppointment().subscribe(
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
