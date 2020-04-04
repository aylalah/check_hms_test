import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import { DoctorJarwisService } from 'src/app/service/doctor-jarwis.service';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css']
})
export class ShelfComponent implements OnInit {
  response: any;
  staff: any;
  staffRes: Object;
  error: any;
  posRes: any;
  pos: any;
  data: string;
  image: any; 
  shelv: any;
  shelvres: any;
  shelvid: string;
  shelvName: any;
  branch: any;
  shelvPoint: any;
  shelvStatus: any;
  p:any;
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

    this.Jarwis.displayBranch().subscribe(
      data=>{
      this.response = data;
      
      this.branch = this.response
     
   
    })

    this.Jarwis.displayShelve().subscribe(
      data=>{
      this.response = data;      
      this.shelv = this.response   
    })
  
}

editdept(id: string) {
  console.log(id)
  this.Jarwis.edtShelve(id).subscribe(
    data=>{      
      this.shelvres = data; 
      this.shelvid= id
      this.shelvName= this.shelvres[0].name;
      this.shelvPoint= this.shelvres[0].point;
      this.shelvStatus= this.shelvres[0].status;
    })
}

onUpdate(form: NgForm) {
this.disabled = true;
  
  form.value.id=this.shelvid
  // this.image= form.value.image
  //  console.log(form)
   console.log(form.value)
  this.Jarwis.updateShelve(form.value).subscribe(        
    data => this.handleResponse(data),
    error => this.handleError(error), 
    
  );  
}

onDelete(id: string) {
  if(confirm('This can\'t be revert after deleted')){

    this.Jarwis.deleteShelve(id).subscribe(  
        
      data => this.handleResponse(data),
      error => this.handleError(error), 
      
    );
  }
  }


  onSubmit(form: NgForm) {
   this.disabled = true;
    this.Jarwis.addShelve(form.value).subscribe(
     
      data => this.handleResponse(data),
      error => this.handleError(error), 
           
    );
    
  }

  handleResponse(data) {    // 
    let snackBarRef = this.snackBar.open("Operation successfully", 'Dismiss', {
      duration: 2000
    })   
    this.router.navigateByUrl('/Admin/(side:shelves)');
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

