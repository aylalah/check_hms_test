import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css']
})
export class DurationComponent implements OnInit {

  response: any;
  staff: any;
  staffRes: Object;
  error: any;
  posRes: any;
  pos: any;
  data: string;
  typeimage: any;
  image: any;
  manuf: any;
  durares: any;
  duraid: string;
  manufName: any;
  typeid: any;
  manufAdd: any;
  manufNum: any;
  manufDetail: any;
  types: any;
  durationName: any;
  upvalue: any;
  upItem_id: any;
  disabled = false;

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
  ) { }

  ngOnInit() {
    this.Jarwis.displayDuration().subscribe(
      data=>{
      this.response = data;      
      this.manuf = this.response   
    })

    this.Jarwis.displayType().subscribe(
      data=>{
      this.response = data;      
      this.types = this.response 
    })
  }

  
  editdept(id: string) {
    console.log(id)
    this.Jarwis.edtduration(id).subscribe(
      data=>{      
        this.durares = data; 
        this.duraid= id
        this.durationName= this.durares[0].duration_name;
        this.upvalue= this.durares[0].value;
        this.upItem_id= this.durares[0].type_id
      })
  }

onUpdate(form: NgForm) {

  this.disabled = true;
  form.value.id=this.duraid
  // this.image= form.value.image
  //  console.log(form)
   console.log(form.value)
  this.Jarwis.updateDuration(form.value).subscribe(        
    data => this.handleResponse(data),
    error => this.handleError(error), 
    
  );  
}

onDelete(id: string) {
  if(confirm('This can\'t be revert after deleted')){

    this.Jarwis.deleteDuration(id).subscribe(  
        
      data => this.handleResponse(data),
      error => this.handleError(error), 
      
    );
  }
}


  onSubmit(form: NgForm) {
   this.disabled = true;
    this.Jarwis.addItemType(form.value).subscribe(
     
      data => this.handleResponse(data),
      error => this.handleError(error), 
           
    );
    
  }

  handleResponse(data) {    // 
    let snackBarRef = this.snackBar.open("Operation successfully", 'Dismiss', {
      duration: 2000
    })   
    this.router.navigateByUrl('/Admin/(side:duration)');
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

  councle(){}

  
}
