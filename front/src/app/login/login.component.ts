import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JarwisService } from '../service/jarwis.service';
import { TokenService } from '../service/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  public form = {
    email: null,
    password: null,
    status:'approved'
  };

  disabled= false;
  sav= 'Login'
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
  constructor( 
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
  ) { }

  ngOnInit() {

    this.Jarwis.profile().subscribe(
      data=>{       
      this.response = data;     
      this.role= this.response.det[0].role_id
    })
  
    this.Jarwis.displayRole().subscribe(
      data=>{       
      this.roleResponse = data
      this.role= this.roleResponse
      this.super=this.role[0].id
      this.global=this.role[1].id
      this.center=this.role[2].id
      this.user=this.role[3].id
    })
    
  }

 
  onSubmit() {
      this.disabled= true;
     this.sav= 'Processing'
    this.Jarwis.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
      );
    
  }

  

  
  handleResponse(data) {
    let pos =data.details[0].dept_name+'-'+ data.details[0].role_name ;

    alert(pos);
    let snackBarRef = this.snackBar.open("Login successfully", 'Dismiss', {
      duration: 2000
    })   

    

    this.Token.handle(data.token.original.access_token);
   
    this.Auth.changeAuthStatus(true);  

    this.ngOnInit() 
    this.router.navigateByUrl('/Admin/(side:'+pos+')');      
   
   this.disabled= false;
   this.sav= 'Submited'

  }

  handleError(error) {

    this.error = error.error.error;
    let snackBarRef = this.snackBar.open(this.error, 'Dismiss', {
      duration: 2000

    })
    this.disabled= false;
    this.sav= 'Login'


  }

 

}
