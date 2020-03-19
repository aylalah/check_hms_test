import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  response: any;
  staff: any;
  imgLink: any;
  allstaff: any;

  constructor( 
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
  ) { }

  ngOnInit() {
    this.Jarwis.displayAllstaff().subscribe(
      data=>{
      // console.log(data);   
      this.response = data;
      
      this.staff = this.response
      this.allstaff=this.staff.all
   
    })

    this.Jarwis. generalSettings().subscribe(
      data=>{
      this.response = data;      
      this.imgLink = this.response[0].app_url;
    })
    
  }

  
  uStatus(id){
    this.Jarwis.uStatus(id).subscribe(
     data => this.handleResponse(data),
       error => this.handleError(error)
  );
   }

   c_uStatus(id){
    this.Jarwis. c_uStatus(id).subscribe(
     data => this.handleResponse(data),
       error => this.handleError(error)
  );
   }

   reStatus(id){
    this.Jarwis. reStatus(id).subscribe(
     data => this.handleResponse(data),
       error => this.handleError(error)
  );
   }

   delete(id){
    this.Jarwis.deleteUser(id).subscribe(
     data => this.handleResponse(data),
       error => this.handleError(error)
  );
   }
   handleError(error: any): void {
    // this.disabled=false;
    // this.sav= 'Update';
   }
   
   
   
   handleResponse(data) { 
     console.log(data) 
    let snackBarRef = this.snackBar.open("Operation Successfull", 'Dismiss', {
     duration: 2000
   })  
  
   this.ngOnInit()
  
   }


}
