import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent implements OnInit {
  response: Object;
  status: any;

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.Jarwis.setupStatus().subscribe(
      data=>{
      this.response = data;      
      this.status = this.response[0];
    })
  }

}
