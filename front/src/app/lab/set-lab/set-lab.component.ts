import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-set-lab',
  templateUrl: './set-lab.component.html',
  styleUrls: ['./set-lab.component.css']
})
export class SetLabComponent implements OnInit {
  response: any;
  labres: any;
  labid: string;
  labName: any;
  error: any;
  labDept: any;
  labDesc: any;
  dept: any;
  constructor( 
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
  ) { }

  ngOnInit() {
    this.Jarwis.displayLabDepartments().subscribe(
      data=>{
      this.response = data;
      this.labDept = this.response 
    })

    this.Jarwis.displayDepartments().subscribe(
      data=>{
      this.response = data;      
      this.dept = this.response   
    })

  
}

editdept(id: string) {
  console.log(id)
  this.Jarwis.edtLabDept(id).subscribe(
    data=>{      
      this.labres = data; 
      this.labid= id
      this.labName= this.labres[0].lab_name;
      this.labDesc= this.labres[0].description;
    })
}

onUpdate(form: NgForm) {

  
  form.value.id=this.labid
  // this.image= form.value.image
  //  console.log(form)
   console.log(form.value)
  this.Jarwis.updateLabDept(form.value).subscribe(        
    data => this.handleResponse(data),
    error => this.handleError(error), 
    
  );  
}

onDelete(id: string) {

  this.Jarwis.deleteLabDepartments(id).subscribe(  
      
    data => this.handleResponse(data),
    error => this.handleError(error), 
    
  );
  }


  onSubmit(form: NgForm) {
   
    this.Jarwis.addLaboratory(form.value).subscribe(
     
      data => this.handleResponse(data),
      error => this.handleError(error), 
           
    );
    
  }

  handleResponse(data) {    // 
    let snackBarRef = this.snackBar.open("Operation Successful", 'Dismiss', {
      duration: 2000
    })   
    this.router.navigateByUrl('/Admin/(side:set_lab_department');
    this.ngOnInit();
    
  }

  handleError(error) {
    this.error = error.error.errors;
    let snackBarRef = this.snackBar.open(this.error, 'Dismiss', {
      duration: 2000

    })
    
  }



}

