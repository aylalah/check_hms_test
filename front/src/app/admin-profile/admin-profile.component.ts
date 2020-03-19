import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators, NgForm, FormControl} from "@angular/forms";
import { TokenService } from '../service/token.service';
import { JarwisService } from '../service/jarwis.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  uid: any;
  me: any;
  response: any;
  error: any;
  np1: any;
  np2: any;
  image: any;
  public submissionForm: FormGroup;
  imgLink: any;
  myFname: any;
  myLname: any;
  myDept: any;
  myRole: any;
  myAdd: any;
  myEmail: any;
  myMobile: any;
  myGender: any;
  myTw: any;
  myFb: any;
  myInst: any;
  constructor(
    public actRoute: ActivatedRoute, 
    private formBuilder: FormBuilder,
    private Token: TokenService, 
    private Jarwis: JarwisService,
    private router: Router,    
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() { 
    this.submissionForm = this.formBuilder.group(
     
      {
        firstname: [''],
       lastname: [''],
       instagram_handle:[''],
       email:[''],
       facebook_handle:[''],
       mobile_number:[''],
       state:[''],
       city:[''],
       gender:[''],
       address:[''],
      id:[''],
      twitter_handle:[''],
     },
   )

   this.Jarwis. generalSettings().subscribe(
    data=>{
    this.response = data;      
    this.imgLink = this.response[0].app_url;
  })
  
    this.Jarwis.profile().subscribe(
      data=>{
      this.response = data;
      this.me = this.response.det[0]
      this.myFname = this.me.firstname;
      this.myLname = this.me.lastname;
      this.myDept = this.me.nameD;
      this.myRole = this.me.role_name;
      this.myAdd = this.me.address;
      this.myEmail = this.me.email;
      this.myMobile = this.me.mobile_number;
      this.myGender = this.me.gender;
      this.myTw = this.me.twitter_handle;
      this.myFb = this.me.facebook_handle;
      this.myInst = this.me.instagram_handle;

      this.submissionForm = this.formBuilder.group(
    
        {
          firstname: [this.me.firstname],
          lastname: [this.me.lastname],
          email:[this.me.email],
          instagram_handle:[this.me.instagram_handle],
          facebook_handle:[this.me.facebook_handle],
          twitter_handle:[this.me.twitter_handle],
          mobile_number:[this.me.mobile_number],
          state:[this.me.state],
          city:[this.me.city],
          gender:[this.me.gender],
          address:[this.me.address],
          id:[this.me.id]
        },
      )
      this.image=this.me.image
    })
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
  
  onSubmitprofile() {
    this.Jarwis.updateprofile({formdata:this.submissionForm.value,image:this.image}).subscribe(
      data => this.handleResponsep(data),
     error => this.handleErrorp(error)
   );
   
  }
  handleErrorp(error) {
   
    this.error = error.error.errors;
    console.log(this.error);
    
  }
  handleResponsep(data) {  
    this.ngOnInit()
  }
  get1(a){
    this.np1 = a.target.value
  }
  get2(a){
    this.np2 = a.target.value
  }

  onChangePwd(form: NgForm){
    if(this.np1 !== this.np2){
     this.error = 'New password dosen\'t match!'
    } else if(this.np1 === this.np2){
      this.Jarwis.changePassword(form.value).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error),  
        )
    }
  }

  handleResponse(data) {    
    if(data == false){
      this.error = 'Old password dosen\'t match!'
    }
    else{
      this.error = ''
      let snackBarRef = this.snackBar.open("Operation Successfull", 'Dismiss', {
        duration: 2000
      })   
      this.ngOnInit();
    }
    
  }

  handleError(error) {
    this.error = error.error.errors;
    let snackBarRef = this.snackBar.open(this.error, 'Dismiss', {
      duration: 2000

    })
    
  }

}
