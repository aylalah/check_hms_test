import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import {FormBuilder, FormGroup, Validators, NgForm, FormControl} from "@angular/forms";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public submissionForm: FormGroup;
  setting:any;
  logo:any;
  image: any;
  company_name: any;
  short_name: any;
  address: any;
  contact_number: any;
  email: any;
  web_url: any;
  app: any;
  module: FormGroup;
  error: any;
  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
    public actRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.submissionForm = this.formBuilder.group(
     
      {
      //   fname: [''],
      //  oname: [''],
          email:[''],
          web_url:[''],
          short_name:[''],
          company_name:[''],
          address:[''],
          id:[''],
          contact_number:[''],
          app:[''],
          module:[''],
         
     },
   )
    
  }
  uploadFile(event){
    let files =event.target.files[0];
    let reader = new FileReader();
    let vm = this;
    reader.onloadend =()=> {     
      this.image = reader.result;
   
    }
    reader.readAsDataURL(files);
  }
  onSubmitsetting() {
    console.log(this.submissionForm)
    this.Jarwis.addGeneralSet({formdata:this.submissionForm.value,image:this.image}).subscribe(
      data => this.handleResponsep(data),
     error => this.handleErrorp(error)
   );
   
  }
  handleErrorp(error) {
   
    this.error = error.error.errors;
    // console.log(error);
    
  }
  handleResponsep(data) {  
    let snackBarRef = this.snackBar.open("Operation Successfull", 'Dismiss', {
      duration: 2000
    })  
    this.ngOnInit()
  }
}

