import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

import { DoctorJarwisService } from 'src/app/service/doctor-jarwis.service';

@Component({
  selector: 'app-pharmacy-log',
  templateUrl: './pharmacy-log.component.html',
  styleUrls: ['./pharmacy-log.component.css']
})
export class PharmacyLogComponent implements OnInit {
  public form = {
    customer: null,
    
  };
 public dat;
  control = new FormControl();
  filteredStreets: Observable<string[]>;
  response: any;
  log: any;
  bran: any;
  error: any;
  pat: any;
  department: any;
  appontId: any;
  slog: any;
  newArr = [];
  search: any;
  logUser: any;
  imgLink: any;
  spin: string;
  disabled = false;

  public _res;

  delete_id;

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
    public actRoute: ActivatedRoute,
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

  public _continue():void {

    this.Jarwis. generalSettings().subscribe(
      data=>{
      this.response = data;      
      this.imgLink = this.response[0].app_url;
    })
    
    this.Jarwis.displayDeptAppointment().subscribe(
      data=>{
        // console.log(data)
      this.response = data;      
      this.log = this.response;
    })
    // Start Autocomplete
    this.Jarwis.displayCustomer().subscribe(
      data=>{
      this.response = data;      
      this.slog = this.response;
      
      let y:any = data;
      for(let x=0; x<y.length; x++){
        let z = data[x].card_number;
        let w = data[x].mobile_number;
        if(!this.newArr.includes(z) || !this.newArr.includes(w)){
          this.newArr.push(z);
          this.newArr.push(w);
        };
      }
    })
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
      
    );
    // this.get()
  }
  // get(){
  //   console.log(this.dat)
  // }
  streets: string[] = this.newArr ;
  private _filter(value: string): string[] {
    // console.log(this.newArr)
    
    // console.log(Array.isArray(this.streets));
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
// End Autocomplete
  appointment(id){

    this.appontId = id;
 
   // console.log(id);
     
   }
 
   onSubmitApp(form: NgForm) {
    this.disabled = true;
     this.Jarwis.makeAppointment({aid:this.appontId, form:form.value }).subscribe(
       data => this.handleResponse(data),
         error => this.handleError(error)
    );
    
   }

  onSubmit(form: NgForm) {
   this.disabled = true;
    this.Jarwis.addCustomer(form.value).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error), 
           
    );
     this.Jarwis.displayDepartments().subscribe(
      data=>{
      // console.log(data);   
      this.response = data;
      this.department = this.response
    })

    
  }
  cancle(id){
    this.delete_id = id;
    // .subscribe(
      //   data=>{
        //   this.handleRespons(data);console.log(data)
        // })
      }
  del(){
    console.log(this.delete_id)
    this.Jarwis.cncel_pharm_log(this.delete_id).subscribe(data=>{
      this.handleRespons(data);
      console.log(data)
      this.Jarwis.displayDeptAppointment().subscribe(
        data=>{
        this.response = data;      
        this.log = this.response; 
      })
    
    },
      err=>{this.handleError(err)}
      )
      }

  handleResponse(data) {    // 
    let snackBarRef = this.snackBar.open("Operation Successful", 'Dismiss', {
      duration: 2000
    })   
    this.disabled = false;
    this.router.navigateByUrl('/Admin/(side:pharmacy_log)');
    this.ngOnInit();
    
  }


  handleError(error) {
    this.error = error.error.errors;
    let snackBarRef = this.snackBar.open("This patient is already appointed", 'Dismiss', {
      duration: 2000

    })
    this.disabled = false;
  }

  onClickSubmit() {
    this.spin="disable";
    this.disabled = true;
    this.Jarwis.makeAppointment(this.form).subscribe(
      data => {
        this.handleRespons(data);console.log(data)},
        error => this.handleErro(error)
   );
   
    // this.Jarwis.stockReport(form.value).subscribe(
    //   data => {
    //     this.response = data;
    //     this.search = this.response;
    //   });  
  }  
  handleRespons(data) {
    this.spin="";    
    // 
    let snackBarRef = this.snackBar.open("Operation Successful", 'Dismiss', {
      duration: 2000
    })   
    // this.router.navigateByUrl('/Admin/(side:set_branch');
    this.ngOnInit();
    
  }

  handleErro(error) {
    this.error = error.error.errors;
    let snackBarRef = this.snackBar.open("This patient is already appointed", 'Dismiss', {
      duration: 2000

    })
    
  }

  getInput(i){
    this.logUser = i.target.value
  }


}
