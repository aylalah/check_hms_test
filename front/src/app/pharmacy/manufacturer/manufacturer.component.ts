import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})
export class ManufacturerComponent implements OnInit {
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
  manufAdd: any;
  manufNum: any;
  manufDetail: any;
  p:any;
  disabled = false;


  constructor( 
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
  ) { }

  ngOnInit() {
    this.Jarwis.displayManufacturer().subscribe(
      data=>{
      this.response = data;      
      this.manuf = this.response   
    })
  
}

editdept(id: string) {
  console.log(id)
  this.Jarwis.edtManufacturer(id).subscribe(
    data=>{      
      this.manufres = data; 
      this.manufid= id
      this.manufName= this.manufres[0].name;
      this.manufAdd= this.manufres[0].address
      this.manufNum= this.manufres[0].contact_number
      this.manufDetail= this.manufres[0].details
    })
}

onUpdate(form: NgForm) {

  this.disabled = true;
  form.value.id=this.manufid
  // this.image= form.value.image
  //  console.log(form)
   console.log(form.value)
  this.Jarwis.updateManufacturer(form.value).subscribe(        
    data => this.handleResponse(data),
    error => this.handleError(error), 
    
  );  
}

onDelete(id: string) {
  if(confirm('This can\'t be revert after deleted')){

    this.Jarwis.deleteManufacturer(id).subscribe(  
        
      data => this.handleResponse(data),
      error => this.handleError(error), 
      
    );
  }
}


  onSubmit(form: NgForm) {
   this.disabled = true;
    this.Jarwis.addManufacturer(form.value).subscribe(
     
      data => this.handleResponse(data),
      error => this.handleError(error), 
           
    );
    
  }

  handleResponse(data) {    // 
    let snackBarRef = this.snackBar.open("Operation successfully", 'Dismiss', {
      duration: 2000
    })   
    this.router.navigateByUrl('/Admin/(side:manufacturer');
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
