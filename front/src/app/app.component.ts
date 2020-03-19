import { Component } from '@angular/core';
import { JarwisService } from './service/jarwis.service';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';
import { TokenService } from './service/token.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SC-Platform';
  response: any;
  status: any;
  statu: any;
  // login = true;
  // home = false;
 
  // public loggedIn: boolean;
  // footer: any;
  // image: any;

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
  ) { }
  // public response:any;
  // public res:any;
  // ftitle: any;
  ngOnInit() {

    this.Jarwis.setupStatus().subscribe(
      data=>{
      this.response = data;      
      this.status = this.response[0];
      this.statu=this.status.status
    })
  
  }
 

}
