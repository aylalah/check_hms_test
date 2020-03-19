import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-depertment',
  templateUrl: './depertment.component.html',
  styleUrls: ['./depertment.component.css']
})
export class DepertmentComponent implements OnInit {
  response: any;
  dept: any;
  staff: any;
  staffRes: Object;
  error: any;
  posRes: any;
  pos: any;
  imgLink: any;

  constructor( 
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
  ) { }

  ngOnInit() {
    this.Jarwis.displayDepartments().subscribe(
      data=>{
      this.response = data;
      
      this.dept = this.response
     
   
    })

    this.Jarwis. generalSettings().subscribe(
      data=>{
      this.response = data;      
      this.imgLink = this.response[0].app_url;
    })
    
    this.Jarwis.displayAllstaff().subscribe(
      data=>{      
      this.staffRes = data;
      
      this.staff = this.staffRes
     
   
    })
  
}


  handleResponse(data) {    // 
    // this.Token.handle(data.access_token);
    this.router.navigateByUrl('');
    // this.disabled=false; 
    // this.sav= 'Saved';
    this.ngOnInit();
    
  }

  handleError(error) {
    this.error = error.error.errors;
    let snackBarRef = this.snackBar.open(this.error, 'Dismiss', {
      duration: 2000

    })
  }

}
