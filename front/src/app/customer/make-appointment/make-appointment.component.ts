import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import { error } from 'util';

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.css']
})
export class MakeAppointmentComponent implements OnInit {
  response: Object;
  appoints: any;
  department: Object;
  appontId: any;
  error: any;
  pat: any;
  catName:any;
  manufid:any;
  p:any;
  onUpdate
  imgLink: any;
  pats: any;
  filterString = "";
  appoint: any;
  onScroll:any;
  info;
  nextbt:Boolean=false;
  prevbt:Boolean=false;
  constructor( 
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
    public actRoute: ActivatedRoute,
   ) { }

  ngOnInit() {

    this.Jarwis. generalSettings().subscribe(
      data=>{
      this.response = data;      
      this.imgLink = this.response[0].app_url;
    })
    
    this.Jarwis.displayAllappointment().subscribe(
      data=>{
      this.response = data;      
      this.appoints = this.response;
      // console.log(this.appoints); 
    })
    
    this.Jarwis.displayDepartments().subscribe(
      data=>{
      // console.log(data);   
      this.response = data;
      this.department = this.response
    })
    this.Jarwis.displayCustomer().subscribe(
      data=>{
      this.response = data;      
      this.pat = this.response   
    })
this.onFilterChange();
  }
  onFilterChange() {
    // console.log(this.appoints)
    this.Jarwis.displayAllappointment().subscribe(
      data=>{
      // this.response = data;  
      this.info=[data];   
      console.log(this.info) 
      this.appoints  = this.info[0].data;
      this.appoint =  this.appoints.filter((cate) => this.isMatch(cate));
      
    })
  
  }
  nextP(){
    if (this.info[0].next_page_url==null) {
      this.nextbt=true;
    }
    else{
      let next = this.info[0].next_page_url;
      this.Jarwis.nextPage(next).subscribe(res=>{
        this.info=[res];
        this.info=[res];    
          this.appoints  = this.info[0].data;
          this.appoint =  this.appoints.filter((cate) => this.isMatch(cate));
      })
      this.nextbt=false;

    }
}
prviouseP(){
  if (this.info[0].prev_page_url==null){
    this.prevbt=false;
  } 
  else {
    let prev = this.info[0].prev_page_url;
    this.Jarwis.nextPage(prev).subscribe(res=>{
      this.info=[res];
      this.info=[res];   
        this.appoints  = this.info[0].data;
        this.appoint =  this.appoints.filter((cate) => this.isMatch(cate));
      })
      this.prevbt=true;
  }
}
    
  
  isMatch(item) {
    if (item instanceof Object) {
      return Object.keys(item).some((k) => this.isMatch(item[k]));
    } else {
      return item.toString().indexOf(this.filterString) > -1
    }
  }
  onSubmitApp(form: NgForm) {
    this.Jarwis.makeAppointment({aid:form.value.patient_id, form:form.value }).subscribe(
      data => this.handleResponse(data),
        error => this.handleError(error)
   );
   
  }

  onDelete(id: string) {
    if(confirm("Click ok to terminate appointment or cancel to go back")){
      this.Jarwis.deleteAppointment(id).subscribe(  
        data => this.handleResponse(data),
        error => this.handleError(error), 
      );
    }
  }
  handleResponse(data) {    // 
    let snackBarRef = this.snackBar.open("Operation Successful", 'Dismiss', {
      duration: 2000
    })   
    this.router.navigateByUrl('/Admin/(side:appointment)');
    this.ngOnInit();  
  }

  handleError(error) {
    this.error = error.error.errors;
    let snackBarRef = this.snackBar.open("This patient is already appointed", 'Dismiss', {
      duration: 2000
    })  
  }

}
