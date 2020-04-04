import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import { DoctorJarwisService } from 'src/app/service/doctor-jarwis.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  response: any;
  staff: any;
  staffRes: Object;
  error: any;
  posRes: any;
  pos: any;
  unitresp: any;
  p:any;
  data: string;
  unit: any;
  unitres: any;
  unitid: string;
  unitName: any;
  unitDescrip: any;
  unitValue: any;
  disabled = false;
  public _res;

  constructor( 
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar,
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

  public _continue() {
    this.Jarwis.displayUnit().subscribe(
      data=>{
      this.response = data;      
      this.unit = this.response   
    })
  
}

editdept(id: string) {
  console.log(id)
  this.Jarwis.edtUnit(id).subscribe(
    data=>{      
      this.unitres = data; 
      this.unitid= id
      this.unitName= this.unitres[0].name;
      this.unitDescrip= this.unitres[0].box_size
      this.unitValue= this.unitres[0].value
         
    })
}

onUpdate(form: NgForm) {

  this.disabled = true;
  form.value.id=this.unitid
  //  console.log(form)
   console.log(form.value)
  this.Jarwis.updateUnit(form.value).subscribe(  
      
    data => this.handleResponse(data),
    error => this.handleError(error), 
    
  );  
}

onDelete(id: string) {
  if(confirm('This can\'t be revert after deleted')){

    this.Jarwis.deleteUnit(id).subscribe(  
        
      data => this.handleResponse(data),
      error => this.handleError(error), 
      
    );
  }
 }


  onSubmit(form: NgForm) {
   this.disabled = true;
    this.Jarwis.addUnit(form.value).subscribe(
     
      data => this.handleResponse(data),
      error => this.handleError(error), 
           
    );
    
  }

  handleResponse(data) {    // 
    let snackBarRef = this.snackBar.open("Operation successfully", 'Dismiss', {
      duration: 2000
    })
    // this.router.navigateByUrl('');
    this.councle() 
    this.ngOnInit();
    this.disabled = false;
  }

  handleError(error) {
    this.error = error.error.errors;
    let snackBarRef = this.snackBar.open(this.error, 'Dismiss', {
      duration: 2000

    })
    this.disabled = false;
  }

  councle(){}


}
