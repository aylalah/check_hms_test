import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  response: any;
  custCat: any;
  disabled = false;
  error: any;
  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
  ) { }

  ngOnInit() {

    this.Jarwis.displayCustomerCategory().subscribe(
        data=>{
        this.response = data;      
        this.custCat = this.response   
      })
  }

  onSubmit(form: NgForm) {
    this.disabled = true;
     this.Jarwis.addCustomer(form.value).subscribe(
       data => this.handleResponse(data),
       error => this.handleError(error),      
     );
     
   }
   handleResponse(data) {    // 
     this.disabled = false;
     let snackBarRef = this.snackBar.open("Operation Successful", 'Dismiss', {
       duration: 2000
     })   
     this.router.navigateByUrl('/Admin/(side:patient)');
     this.ngOnInit();
     
   }
 
   handleError(error) {
     this.disabled = false;
     this.error = error.error.errors;
     let snackBarRef = this.snackBar.open("An error occured, try again later", 'Dismiss', {
       duration: 2000
 
     })
     
   }
}
