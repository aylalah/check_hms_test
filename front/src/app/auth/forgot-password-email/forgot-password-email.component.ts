import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot-password-email',
  templateUrl: './forgot-password-email.component.html',
  styleUrls: ['./forgot-password-email.component.css']
})
export class ForgotPasswordEmailComponent implements OnInit {
  public error = null;
  message: string;
  res: Object;
  selectedValue: string;
  selectedCar: string;
  response: any;
  roleResponse: Object;
  super: any;
  global: any;
  user: any;
  center: any;
  role:any;
  disabled = false;

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
  }

  
onSubmit(form: NgForm) {
  this.disabled = true;
  this.Jarwis.sendPasswordResetLink(form.value).subscribe(
    data => this.handleResponse(data),
    error => this.handleError(error)
    );
}
handleResponse(data) {
  this.disabled = false;
  if(data == false){
    let snackBarRef = this.snackBar.open("Invalid email address", 'Dismiss', {
      duration: 2000
    })
  }else{
    let snackBarRef = this.snackBar.open("Check your email to reset your password", 'Dismiss', {
      duration: 2000
    }) 
  }  
}

handleError(error) {
  this.disabled = false;
  this.error = error.error.error;
  if(error){
    let snackBarRef = this.snackBar.open("Invalid email address", 'Dismiss', {
      duration: 2000
    })
  }
}

}
