import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';
@Component({
  selector: 'app-trans-history',
  templateUrl: './trans-history.component.html',
  styleUrls: ['./trans-history.component.css']
})
export class TransHistoryComponent implements OnInit {
  response: any;
  bran: any;
  payloads: any;
  action: any;
  getAction: any;
  error: any;
  payItem: any;
  imgLink: any;
  payDetail: any;
spin="";

disabled = false;

exportAsConfig: ExportAsConfig = {
  type: 'xlsx', // the type you want to download
  elementId: 'print-history', // the id of html/table element
}
  sBranch: any;
  sDate: any;
  eDate: any;
constructor( 
  private exportAsService: ExportAsService,
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
  ) { }

  ngOnInit() {
    this.Jarwis. generalSettings().subscribe(
      data=>{
      this.response = data;      
      this.imgLink = this.response[0].app_url;
    })
    
    this.Jarwis.displayBranch().subscribe(
      data=>{
      this.response = data;      
      this.bran = this.response   
    }) 
  }

  get(){
    this.ngOnInit();
  }

  onClickSubmit(form: NgForm) {
    this.disabled = true;
this.spin="disable";
    this.Jarwis.stockReport(form.value).subscribe(
      data => {
        this.response = data;
        this.payloads = this.response;
        this.payItem= this.payloads.item;
        this.payDetail = this.payloads.details;
        this.sBranch = this.payloads.bran.name.toUpperCase();
        this.sDate = this.payloads.date[0];
        this.eDate = this.payloads.date[1];
        this.spin="";
      }); 
      this.disabled = false; 
  }  

  printComponent() {
    var divToPrint=document.getElementById("print-history");
    
    var style = "<style>";
    style = style + "table {width: 100%;font: 17px Calibri;}";
    style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
    style = style + "padding: 2px 3px;text-align: center;}";
    style = style + "a {text-decoration: none; color: black;}";
    style = style + "img {width: 25px;height: 25px;}";
    style = style + "h5 {text-align: center;}";
    style = style + "</style>";

var win = window.open('', '', 'height=700,width=700');
win.document.write(style);          //  add the style.
win.document.write(divToPrint.outerHTML);
win.document.close();
win.print();
   
}
exportAsXLSX(){
  
  // download the file using old school javascript method
  this.exportAsService.save(this.exportAsConfig, 'Report-Data').subscribe(() => {
    // save started
  });
  // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
  // this.exportAsService.get(this.config).subscribe(content => {
  //   console.log(content);
  // });
}
}
