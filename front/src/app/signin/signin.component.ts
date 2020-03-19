import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JarwisService } from '../service/jarwis.service';
import { TokenService } from '../service/token.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
declare var $: any;
export interface Gender {
  value: string;
  viewValue: string;
}
export interface Town {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
 
  
  disabled= false;
  sav= 'Register';
  public error: any;
  public gender;
  response: any;
  roleid: any;
  public res;
  options: { name: string; value: number; }[];
  department: any;
  constructor( private Jarwis: JarwisService,
    private Token: TokenService,
    public snackBar: MatSnackBar,
    private router: Router) { }
       
    
    onSubmit(form: NgForm) {
      this.disabled=true; 
      this.sav= 'Processing';
   
      this.Jarwis.signup(form.value).subscribe(
       
        data => this.handleResponse(data),
        error => this.handleError(error), 
             
      );
      
    }
    handleResponse(data) {
      this.disabled=true; 
      // this.Token.handle(data.access_token);
      this.router.navigateByUrl('');
      this.disabled=false; 
      this.sav= 'Saved';
      this.ngOnInit();
      
    }
  
    handleError(error) {
      this.disabled=false; 
      this.error = error.error.errors;
      let snackBarRef = this.snackBar.open(this.error, 'Dismiss', {
        duration: 2000
  
      })
    }
    displayroleuser(){
      this.Jarwis.roleuser().subscribe(
        data=>{
       
        this.res = data;
        
        this.roleid=this.res[0]
       
        }
      )
    }    
 
  ngOnInit() {   
   

    this.Jarwis.displayDepartments().subscribe(
      data=>{
      console.log(data);   
      this.response = data;
      this.department = this.response
     
   
    })
   
  
}


}
