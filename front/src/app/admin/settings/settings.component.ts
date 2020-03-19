import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import {FormBuilder, FormGroup, Validators, NgForm, FormControl} from "@angular/forms";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
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
       logo: [''],
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
    this.Jarwis.general_setting().subscribe(
      data=>{
      this.setting = data;  
      this.company_name=this.setting.company_name
      this.short_name=this.setting.short_name
      this.address=this.setting.address
      this.contact_number=this.setting.contact_number
      this.email=this.setting.email
      this.web_url=this.setting.web_url
      this.app=this.setting.app
      this.module=this.setting.module
      this.submissionForm = this.formBuilder.group(
    
        {
          company_name:[this.company_name],
          short_name:[this.short_name],
          address:[this.address],
          contact_number:[this.contact_number],
          email:[this.email],
          web_url:[this.web_url],
          app:[this.app],
          module:[this.module],
         id:[this.setting.id],
         logo:[this.setting.logo]
        },
      )
      this.image=this.setting.logo
      })
      console.log(this.submissionForm)
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
    this.Jarwis.updateGeneralSet({formdata:this.submissionForm.value,image:this.image}).subscribe(
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
