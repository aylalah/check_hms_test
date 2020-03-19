import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import {FormBuilder, FormGroup, Validators, NgForm, FormControl} from "@angular/forms";


@Component({
  selector: 'app-refill-details',
  templateUrl: './refill-details.component.html',
  styleUrls: ['./refill-details.component.css']
})
export class RefillDetailsComponent implements OnInit {
  public submissionForm: FormGroup;
  response: any;
  total: any;
  error: any;
  itemDet: any;
  pres: any;
  pat: any;
  patID: any;
  int = parseInt;
  voucherId: any;
  refillAmt = 1;
  imgLink: any;
  patnt: any;
  qty: any;
  pat2: any;
  response2: any;
  pat_refil: any;
  rValue: any;
  rId: any;
  appId: any;

  constructor( 
    private http: HttpClient,
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
    public actRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.Jarwis. generalSettings().subscribe(
      data=>{
      this.response = data;      
      this.imgLink = this.response[0].app_url;
    })
    
    this.actRoute.paramMap.subscribe((params => {
	    let id = params.get('id');
	    this.patID = id;
	    this.Jarwis.displayRefillPrescriptions(id, '').subscribe(
	      data=>{
	      this.response = data;      
        this.pat = this.response.refill;
        this.pat2 = this.response.refill2;
        this.patnt = this.pat[0];
        this.voucherId = this.pat[0].voucher_id;
        this.appId = this.response.appId[0].id;
	    })
  }))
  
  this.submissionForm = this.formBuilder.group(
     
    {
      60: ['hhh'],
   },
 )

    this.Jarwis.disItemDet().subscribe(
      data=>{
      this.response = data;      
      this.itemDet = this.response       
    })
  }
 

  onRefill(id) {

       
    this.rId= id
    this.Jarwis.pres_refill_id(id).subscribe(
      data=>{
      this.response2 = data;      
      this.pat_refil = this.response2[0].refill;     
    })

    this.refillAmt = 1;
  }

  getRefill(r){

    this.refillAmt = r.target.value;

    if (this.refillAmt > this.pat_refil) {
      alert('Refill is not up to this value');  
      r.target.value = '';
    } else {
      
    }
   
  }

  onSubmit(form:NgForm){
    form.value.rId = this.rId;
    form.value.voucherId = this.voucherId;
    this.Jarwis.saveRefill(form.value).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),  
    );

  }

  onCheckout(){
    this.Jarwis.checkRefill(this.voucherId).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),  
    );

  }
  

  handleResponse(data) {    // 
    let snackBarRef = this.snackBar.open("Operation Successfull", 'Dismiss', {
      duration: 2000
    })   
    this.ngOnInit();
    
  }

  handleError(error) {
    this.error = error.error.errors;
    let snackBarRef = this.snackBar.open(this.error, 'Dismiss', {
      duration: 2000

    })
    
  }
}
