import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import { DoctorJarwisService } from 'src/app/service/doctor-jarwis.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  response: any;
  staff: any;
  staffRes: Object;
  error: any;
  posRes: any;
  pos: any;
  data: string;
  image: any;
  cat: any;
  catres: any;
  catid: string;
  catName: any;
  catAdd: any;
  catNum: any;
  catDetail: any;
  manufid:any;
  catt:any;
  filterString = "";
  cats;
  p:any;
  disabled = false;
  onScroll:any;
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
    this.DocJarwis.profile().subscribe(
      data=>{
      this._res = data;
      (this._res.det[0].position_id == 3)? this._continue() : this.router.navigateByUrl('/');
    })
  
}

public _continue():void {
  this.Jarwis.displayCategories().subscribe(
    data=>{
    this.response = data;      
    this.cat = this.response   
  })
  this.onFilterChange();
}

onFilterChange() {
  this.Jarwis.displayCategories().subscribe(
    data=>{
    // this.response = data;      
    this.cat = data
    this.cats = this.cat.filter((cate) => this.isMatch(cate));
  })

}
  

isMatch(item) {
  if (item instanceof Object) {
    return Object.keys(item).some((k) => this.isMatch(item[k]));
  } else {
    return item.toString().indexOf(this.filterString) > -1
  }
}

editdept(id: string) {
  console.log(id)
  this.Jarwis.edtCategories(id).subscribe(
    data=>{      
      this.catres = data; 
      this.catid= id
      this.catName= this.catres[0].cat_name;
    })
}

onUpdate(form: NgForm) {
this.disabled = true;
  
  form.value.id=this.catid
  // this.image= form.value.image
  //  console.log(form)
   console.log(form.value)
  this.Jarwis.updateCategories(form.value).subscribe(        
    data => this.handleResponse(data),
    error => this.handleError(error), 
    
  );  
}

onDelete(id: string) {
  if(confirm('This can\'t be revert after deleted')){

    this.Jarwis.deleteCategories(id).subscribe(  
        
      data => this.handleResponse(data),
      error => this.handleError(error), 
      
    );
  }
  }


  onSubmit(form: NgForm) {
   this.disabled = true;
    this.Jarwis.addCategories(form.value).subscribe(
     
      data => this.handleResponse(data),
      error => this.handleError(error), 
           
    );
    
  }

  handleResponse(data) {    // 
    let snackBarRef = this.snackBar.open("Operation successfully", 'Dismiss', {
      duration: 2000
    })   
    this.router.navigateByUrl('/Admin/(side:item_category)');
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

