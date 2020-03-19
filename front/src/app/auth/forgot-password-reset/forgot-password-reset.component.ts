import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JarwisService } from '../../service/jarwis.service';
import { TokenService } from '../../service/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup, Validators, NgForm, FormControl} from "@angular/forms";
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-forgot-password-reset',
  templateUrl: './forgot-password-reset.component.html',
  styleUrls: ['./forgot-password-reset.component.css']
})
export class ForgotPasswordResetComponent implements OnInit {
  token: any;
  resp: Object;
  response: any;
  error: any;

  constructor(
    private http: HttpClient,
     public actRoute: ActivatedRoute, 
     private formBuilder: FormBuilder,
     private Token: TokenService, 
     private Jarwis: JarwisService,
     private router: Router,    
     public snackBar: MatSnackBar, 
  ) { }

  ngOnInit() {
    this.actRoute.paramMap.subscribe((params => {
      let token = params.get('token');
      this.token = token;
    }))
  }

  onSubmit(form: NgForm){
    form.value.token = this.token
    this.Jarwis.resetPassword(form.value).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),  
    )
  }
  handleResponse(data) {
    if(data == false){
      let snackBarRef = this.snackBar.open("Invalid email address", 'Dismiss', {
        duration: 2000
      })
    }else{
      let snackBarRef = this.snackBar.open("Password reset successfully proceed to login", 'Dismiss', {
        duration: 2000
      }) 
    }  
  }
  
  handleError(error) {
    this.error = error.error.error;
    if(error == false){
      let snackBarRef = this.snackBar.open("Invalid email address", 'Dismiss', {
        duration: 2000
      })
    }
  }
}
