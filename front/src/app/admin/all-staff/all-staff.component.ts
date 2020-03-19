import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-all-staff',
  templateUrl: './all-staff.component.html',
  styleUrls: ['./all-staff.component.css']
})
export class AllStaffComponent implements OnInit {
  response: any;
  department: any;
  role: any;
  position: any;
  branch: any;
  givenDept: any;
  error: any;
  profile: any;
  givenRole: any;
  staff: any;
  thisStaff: any;
  imgLink: any;

  allstaff: any;

  disabled = false;
  roleID: any;


  constructor( private Jarwis: JarwisService,
    private Token: TokenService,
    public snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
    this.Jarwis.displayAllstaff().subscribe(
      data=>{
      this.response = data;
      this.staff = this.response
      this.allstaff=this.staff.all
    })
    
    this.Jarwis. generalSettings().subscribe(
      data=>{
      this.response = data;      
      this.imgLink = this.response[0].app_url;
    })
    
    this.Jarwis.profile().subscribe(
      data=>{
      this.response = data;
      this.profile = this.response.det[0];
      this.roleID = this.profile.role_id
    })

    this.Jarwis.displayDepartments().subscribe(
      data=>{
      this.response = data;
      this.department = this.response
    })

    this.Jarwis.displayRole().subscribe(
      data=>{
      this.response = data;
      this.role = this.response
    })

    this.Jarwis.displayBranch().subscribe(
      data=>{
      this.response = data;      
      this.branch = this.response
      })
  }
  onChange1(b){
    this.givenDept = b.target.value;
    this.ngOnInit() 
  }
  
  onSelectRole(r){
    this.givenRole = r.target.value;
    this.ngOnInit()
  }

  onSubmit(form: NgForm) {
    this.disabled = true;
    this.Jarwis.signup(form.value).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),  
    );
  }

  uStatus(id){
    this.Jarwis.uStatus(id).subscribe(
     data => this.handleResponse(data),
       error => this.handleError(error)
  );
   }

   c_uStatus(id){
     if(confirm('This will block the user from logging in')){
      this.Jarwis. c_uStatus(id).subscribe(
        data => this.handleResponse(data),
          error => this.handleError(error)
     );
     }
   }

   reStatus(id){
    if(confirm('This will re-activate the user')){
      this.Jarwis. reStatus(id).subscribe(
      data => this.handleResponse(data),
        error => this.handleError(error)
    );
    }
   }
   getId(id){
     this.thisStaff = id;
   }
  handleResponse(data) { 
    let snackBarRef = this.snackBar.open("Operation Successful", 'Dismiss', {
      duration: 2000
    })   
    // this.router.navigateByUrl('/Admin/(side:catacturer');
    this.ngOnInit();
    this.disabled = false;
  }

  handleError(error) {
    this.error = error.error.errors;
    let snackBarRef = this.snackBar.open(this.error, 'Dismiss', {
      duration: 2000

    })
    this.disabled = false;
  }
}
