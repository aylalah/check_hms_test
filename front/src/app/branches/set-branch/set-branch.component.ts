import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-set-branch',
  templateUrl: './set-branch.component.html',
  styleUrls: ['./set-branch.component.css']
})
export class SetBranchComponent implements OnInit {
  response: Object;
  bran: Object;
  error: any;
  catName:any;
  manufid:any;
  onUpdate:any;
  disabled = false;

  constructor( 
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
  ) { }

  ngOnInit() {
    this.Jarwis.displaysetBranch().subscribe(
      data=>{
      this.response = data;      
      this.bran = this.response   
    })
  }


  onSubmit(form: NgForm) {
   this.disabled = true;
    this.Jarwis.createBranch(form.value).subscribe(
     
      data => this.handleResponse(data),
      error => this.handleError(error), 
           
    );
    
  }

  onSuspend(id: string) {

    this.Jarwis.suspendBranch(id).subscribe(  
        
      data => this.handleResponse(data),
      error => this.handleError(error), 
      
    );
  }

  onActivate(id: string) {

    this.Jarwis.activateBranch(id).subscribe(  
        
      data => this.handleResponse(data),
      error => this.handleError(error), 
      
    );
  }

  handleResponse(data) {    // 
    let snackBarRef = this.snackBar.open("Operation Successful", 'Dismiss', {
      duration: 2000
    })   
    // this.router.navigateByUrl('/Admin/(side:set_branch');
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
