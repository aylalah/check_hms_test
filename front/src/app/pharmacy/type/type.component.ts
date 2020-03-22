import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import { DoctorJarwisService } from 'src/app/service/doctor-jarwis.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
  response: any;
  staff: any;
  staffRes: Object;
  error: any;
  posRes: any;
  pos: any;
  data: string;
  type: any;
  typeres: any;
  typeid: string;
  typeName: any;
  typeDescrip: any;
  typeValue: any;
  unitid: any;
  typeimage: any;
  image: any;
  p:any;
  imgLink: any;
  disabled = false;
  public _res;

  constructor( 
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

  public _continue() {
    this.Jarwis. generalSettings().subscribe(
      data=>{
      this.response = data;      
      this.imgLink = this.response[0].app_url;
    })
    
    this.Jarwis.displayType().subscribe(
      data=>{
      this.response = data;      
      this.type = this.response   
    })
  
}

editdept(id: string) {
  console.log(id)
  this.Jarwis.edtType(id).subscribe(
    data=>{      
      this.typeres = data; 
      this.typeid= id
      this.typeName= this.typeres[0].type_name;
      this.typeimage= this.typeres[0].image
         
    })
}

onUpdate(form: NgForm) {
this.disabled = true;
  
  form.value.id=this.typeid
  // this.image= form.value.image
  //  console.log(form)
   console.log(form.value)
  this.Jarwis.updateType({data:form.value, image2:this.image}).subscribe(  
      
    data => this.handleResponse(data),
    error => this.handleError(error), 
    
  );  
}

uploadFile(event){
  let files =event.target.files[0];
  let reader = new FileReader();
  let vm = this;
  reader.onloadend =()=> {
    // body...
    this.image = reader.result;
  //  console.log(this.response.file)
  }
  reader.readAsDataURL(files);
}

onDelete(id: string) {
  if(confirm('This can\'t be revert after deleted')){

    this.Jarwis.deleteType(id).subscribe(  
        
      data => this.handleResponse(data),
      error => this.handleError(error), 
      
    );
  }
}


  onSubmit(form: NgForm) {
   this.disabled = true;
    this.Jarwis.addType(form.value).subscribe(
     
      data => this.handleResponse(data),
      error => this.handleError(error), 
           
    );
    
  }

  handleResponse(data) {    // 
    let snackBarRef = this.snackBar.open("Operation successfully", 'Dismiss', {
      duration: 2000
    })   
    this.router.navigateByUrl('/Admin/(side:item_type)');
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
