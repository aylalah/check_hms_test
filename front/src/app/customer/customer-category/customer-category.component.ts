import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-category',
  templateUrl: './customer-category.component.html',
  styleUrls: ['./customer-category.component.css']
})
export class CustomerCategoryComponent implements OnInit {
  response: any;
  custCats: any;
  custcatid: any;
  custCatsRes: any;
  custCatName: any;
  disabled = false;
  error: any;
  custCatDescpt: any;
  percent: any;
  price_column: any;
  onScroll: any;
  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
  ) { }

  ngOnInit() {

    this.Jarwis.displayCustomerCategory().subscribe(
      data=>{
      this.response = data;      
      this.custCats = this.response   
    })
    // this.onFilterChange();
    }
// onFilterChange() {
//   this.Jarwis.displayCategories().subscribe(
//     data=>{
//     // this.response = data;      
//     this.custCats = data
//     this.custCats = this.cat.filter((cate) => this.isMatch(cate));
//   })

// }
  

// isMatch(item) {
//   if (item instanceof Object) {
//     return Object.keys(item).some((k) => this.isMatch(item[k]));
//   } else {
//     return item.toString().indexOf(this.filterString) > -1
//   }
// }

editdept(id: string) {
  console.log(id)
  this.Jarwis.edtCustCategories(id).subscribe(
    data=>{      
      this.custCatsRes = data; 
      this.custcatid= id
      this.custCatName = this.custCatsRes[0].category_name;
      this.custCatDescpt = this.custCatsRes[0].description;
      this.percent = this.custCatsRes[0].pacentage_value;
      this.price_column = this.custCatsRes[0].price_list_column;
    })
}

onUpdate(form: NgForm) {
this.disabled = true;
  
  form.value.id=this.custcatid
  this.Jarwis.updateCustCategories(form.value).subscribe(        
    data => this.handleResponse(data),
    error => this.handleError(error), 
    
  );  
}

onDelete(id: string) {
  if(confirm('This can\'t be revert after deleted')){

    this.Jarwis.deleteCustCategories(id).subscribe(  
        
      data => this.handleResponse(data),
      error => this.handleError(error), 
      
    );
  }
  }


  onSubmit(form: NgForm) {
   this.disabled = true;
    this.Jarwis.addCustCategories(form.value).subscribe(
     
      data => this.handleResponse(data),
      error => this.handleError(error), 
           
    );
    
  }

  handleResponse(data) {    // 
    let snackBarRef = this.snackBar.open("Operation successfully", 'Dismiss', {
      duration: 2000
    })   
    this.router.navigateByUrl('/Admin/(side:patient_category)');
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

}
