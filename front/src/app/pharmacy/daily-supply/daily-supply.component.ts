import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import { DoctorJarwisService } from 'src/app/service/doctor-jarwis.service';

@Component({
  selector: 'app-daily-supply',
  templateUrl: './daily-supply.component.html',
  styleUrls: ['./daily-supply.component.css']
})
export class DailySupplyComponent implements OnInit {

  response: any;
  staff: any;
  staffRes: Object;
  error: any;
  posRes: any;
  pos: any;
  data: string;
  typeimage: any;
  image: any;
  manuf: any;
  manufres: any;
  manufid: string;
  manufName: any;
  typeid: any;
  types: any;
  dayName: any;
  dayValue: any;
  upItem_id: any;
  durares: any;
  duraid: string;
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

  public _continue():void {
    this.Jarwis.displayInstruction().subscribe(
      data=>{
      this.response = data;      
      this.manuf = this.response   
    })

    this.Jarwis.displayType().subscribe(
      data=>{
      this.response = data;      
      this.types = this.response 
    })
  }

  
  editdept(id: string) {
    console.log(id)
    this.Jarwis.edtinstruction(id).subscribe(
      data=>{      
        this.manufres = data; 
        this.manufid= id
        this.dayName= this.manufres[0].name;
        this.dayValue= this.manufres[0].value;
        this.upItem_id= this.manufres[0].type_id
        // this.manufDetail= this.manufres[0].details
      })
  }

onUpdate(form: NgForm) {
  this.disabled = true;
  form.value.id=this.duraid; 
   console.log(form.value)
  this.Jarwis.updateInstruction(form.value).subscribe(        
    data => this.handleResponse(data),
    error => this.handleError(error), 
    
  );  
}

onDelete(id: string) {
  if(confirm('This can\'t be revert after deleted')){

    this.Jarwis.deleteInstruction(id).subscribe(  
        
      data => this.handleResponse(data),
      error => this.handleError(error), 
      
    );
  }
}


  onSubmit(form: NgForm) {
   this.disabled = true;
    this.Jarwis.addInstruction(form.value).subscribe(     
      data => this.handleResponse(data),
      error => this.handleError(error),            
    );    
  }
  

  handleResponse(data) {    // 
    let snackBarRef = this.snackBar.open("Operation successfully", 'Dismiss', {
      duration: 2000
    })   
    this.router.navigateByUrl('/Admin/(side:instruction)');
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
