import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-set-lab-test',
  templateUrl: './set-lab-test.component.html',
  styleUrls: ['./set-lab-test.component.css']
})
export class SetLabTestComponent implements OnInit {

  response: any;
  labDept: any;
  testtyperes: any;
  testtypeid: string;
  testtypeName: any;
  testtypeDesc: any;
  error: any;
  labTestType: any;
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

  this.Jarwis.displayLabTestType().subscribe(
    data=>{
    this.response = data;
    this.labTestType = this.response 
  })
  
}

editdept(id: string) {
  console.log(id)
  this.Jarwis.edtLabTestType(id).subscribe(
    data=>{      
      this.testtyperes = data; 
      this.testtypeid= id;
      this.testtypeName= this.testtyperes[0].test_name;
      this.testtypeDesc= this.testtyperes[0].test_description;
    })
}

onUpdate(form: NgForm) {

  
  form.value.id=this.testtypeid
  // this.image= form.value.image
  //  console.log(form)
   console.log(form.value)
  this.Jarwis.updateLabTestType(form.value).subscribe(        
    data => this.handleResponse(data),
    error => this.handleError(error), 
    
  );  
}

onDelete(id: string) {

  this.Jarwis.deleteLabTestType(id).subscribe(  
      
    data => this.handleResponse(data),
    error => this.handleError(error), 
    
  );
  }


  onSubmit(form: NgForm) {
   
    this.Jarwis. addLaboratoryTest(form.value).subscribe(
     
      data => this.handleResponse(data),
      error => this.handleError(error), 
           
    );
    
  }

  handleResponse(data) {    // 
    let snackBarRef = this.snackBar.open("Operation Successful", 'Dismiss', {
      duration: 2000
    })   
    this.router.navigateByUrl('/Admin/(side:set_lab_test');
    this.ngOnInit();
    
  }

  handleError(error) {
    this.error = error.error.errors;
    let snackBarRef = this.snackBar.open(this.error, 'Dismiss', {
      duration: 2000

    })
    
  }

  councle(){}


}