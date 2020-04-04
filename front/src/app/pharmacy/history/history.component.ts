import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';
import { DoctorJarwisService } from 'src/app/service/doctor-jarwis.service';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  response: any;
  branch: any;
  error: any;
  action: any;
  payloads: any;
  getAction = '';
  imgLink: any;
  spin="";
  disabled:any;
  exportAsConfig: ExportAsConfig = {
    type: 'xlsx', // the type you want to download
    elementId: 'print-history', // the id of html/table element
  }
  presc: any;
  transFrm: any;
  transTo: any;
  vari: any;
  sBranch: any;
  sDate: any;
  eDate: any;
  hAction: any;
  adds: any;
  public _res;
  
  constructor( 
    private exportAsService: ExportAsService,
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
    private DocJarwis: DoctorJarwisService
  ) { }

  ngOnInit() {
    //checking if router is  pharmacy
    this.DocJarwis.profile().subscribe(
      data=>{
      this._res = data;
      (this._res.det[0].position_id == 3)? this._continue() : this.router.navigateByUrl('/');
    })
  
  }

  public _continue(){
    
    this.Jarwis. generalSettings().subscribe(
      data=>{
      this.response = data;      
      this.imgLink = this.response[0].app_url;
    })
    
    this.Jarwis.displayBranch().subscribe(
      data=>{
      this.response = data;      
      this.branch = this.response
      })  
      
  }

  onClickSubmit(form: NgForm) {
    this.payloads = '';
    this.spin="disable";
    this.Jarwis.stockHistory(form.value).subscribe(
      data => {
        this.response = data;
        this.payloads = this.response;
        this.adds = this.payloads.adds;
        this.presc = this.payloads.pres;
        this.transFrm = this.payloads.transFrm;
        this.transTo = this.payloads.transTo;
        this.vari = this.payloads.vari;
        this.sBranch = this.payloads.bran.toUpperCase();
        this.sDate = this.payloads.date[0];
        this.eDate = this.payloads.date[1];
        this.hAction = this.payloads.action;
        this.action = this.getAction;
        this.spin="";
      },
      error => this.handleError(error),      
    );  
  }

  onSelectAction(id) {
    this.getAction = id.target.value;
    this.ngOnInit()
  }

  handleResponse(data) {     
    let snackBarRef = this.snackBar.open("Operation Successfull", 'Dismiss', {
      duration: 2000
    })   
    this.router.navigateByUrl('/Admin/(side:catacturer');
    this.ngOnInit();
    
  }

  handleError(error) {
    this.error = error.error.errors;
    let snackBarRef = this.snackBar.open(this.error, 'Dismiss', {
      duration: 2000

    })
    
  }
  printComponent() {
    var divToPrint=document.getElementById("print-history");
    
    var style = "<style>";
    style = style + "table {width: 100%;font: 17px Calibri;}";
    style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
    style = style + "padding: 2px 3px;text-align: center;}";
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
  // Supported Formats:Image - .png,PDF - .pdf,CSV - .csv,Text - .txt,Microsoft Excel sheets - .xls, .xlsx,Microsoft Word documents - .doc, .docx,JSON - .json,XML - .xml
  // download the file using old school javascript method
  this.exportAsService.save(this.exportAsConfig, 'History-Data').subscribe(() => {
    // save started
  });
  // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
  // this.exportAsService.get(this.config).subscribe(content => {
  //   console.log(content);
  // });
}
}
