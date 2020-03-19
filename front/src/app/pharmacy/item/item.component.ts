import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import {FormBuilder, FormGroup, Validators, NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  response: any;
  staff: any;
  staffRes: Object;
  error: any;
  posRes: any;
  pos: any;
  data: string;
  image: any;
  item: any;
  itemres: any;
  itemid: string;
  itemName: any;
  itemAdd: any;
  itemNum: any;
  itemDetail: any;
  branch: any;
  items: any;
  itemname: any;
  itemimg: any;
  typeimg: any;
  resitem: any;
  type:any;
  typ:any;
  manuf:any;
  cat:any;
  // image: any;
  public submissionForm: FormGroup;
  imgLink: any;
  manufacturer_id: any;
  item_category_id: any;
  item_type_id: any;
  constructor(
    private formBuilder: FormBuilder, 
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,public actRoute: ActivatedRoute,
    public snackBar: MatSnackBar, 
  ) { }

  ngOnInit() {
    this.Jarwis. generalSettings().subscribe(
      data=>{
      this.response = data;      
      this.imgLink = this.response[0].app_url;
    })
    
    this.Jarwis.displayType().subscribe(
      data=>{
      this.response = data;      
      this.typ = this.response 
    })

    this.Jarwis.displayCategories().subscribe(
      data=>{
      this.response = data;      
      this.cat = this.response  
    })

    this.Jarwis.displayManufacturer().subscribe(
      data=>{
      this.response = data;      
      this.manuf = this.response   
    })
    this.submissionForm = this.formBuilder.group(
     
      {
        generic_name: [''],
       selling_price: [''],
       purchasing_price:[''],
       markup_price:[''],
       manufacture_date:[''],
       expiring_date:[''],
       item_img:[''],
       price_2:[''],
       price_3:[''],
      //  unit_name:[''],
      //  box_size:[''],
      //  value:[''],
       type_name:[''],
      id:[''],
      cat_name:[''],
      manuf_name:[''],
      manufacturer_id:[''],
      item_category_id:[''],
      item_type_id:[''],
      // address:[''],
      // contact_number:[''],
      // details:[''],
     },
   )
    // this.Jarwis.displayItemDetails().subscribe(
    //   data=>{
    //   this.response = data;
      
    //   this.branch = this.response
    //   })

      this.actRoute.paramMap.subscribe((params => {
        let id = params.get('id');
        
        this.Jarwis.edtItemDetails(id).subscribe(data=>{
          this.response = data;
          this.typeimg=this.response[0].image
          this.itemimg=this.response[0].item_img
          this.resitem=this.response[0]
          // this.item=this.response.item
          // this.id4=this.resnh.id
          // this.lenght= this.title.length
          // console.log(this.lenght)
          // console.log(this.resitem)
          this.submissionForm = this.formBuilder.group(
     
            {
              generic_name: [this.resitem.generic_name],
             selling_price: [this.resitem.purchasing_price*this.resitem.markup_price],
             purchasing_price:[this.resitem.purchasing_price],
             markup_price:[this.resitem.markup_price],
             manufacture_date:[this.resitem.manufacture_date],
             expiring_date:[this.resitem.expiring_date],
            item_img:[this.resitem.item_img],
            price_2:[this.resitem.price_2],
            price_3:[this.resitem.price_3],
            //  box_size:[this.resitem.box_size],
            //  value:[this.resitem.value],
             type_name:[this.resitem.type_name],
            id:[this.resitem.id],
            cat_name:[this.resitem.cat_name],
            manuf_name:[this.resitem.manuf_name],
            manufacturer_id:[this.manufacturer_id],
            item_category_id:[this.item_category_id],
            item_type_id:[this.item_type_id],
            // address:[this.resitem.address],
            // contact_number:[this.resitem.contact_number],
            // details:[this.resitem.details],
           },
         )
       
        })
      
          }));

    // this.Jarwis.displayItem('branch_main').subscribe(
    //   data=>{
    //   this.response = data;      
    //   this.items = this.response   
    // })
  
}
uploadFile(event){
  let files =event.target.files[0];
  let reader = new FileReader();
  let vm = this;
  reader.onloadend =()=> {
    
    this.itemimg = reader.result;
 
  }
  reader.readAsDataURL(files);
}

onSubmitItem(){
  this.Jarwis.updateItemDetails({formdata:this.submissionForm.value,image:this.itemimg}).subscribe(
    data => this.handleResponse(data),
   error => this.handleError(error)
 );
 
}
editdept(id: string) {
  this.Jarwis.edtCategories(id).subscribe(
    data=>{      
      this.itemres = data; 
      this.itemid= id
      this.itemName= this.itemres[0].name;
    })
}

onUpdate(form: NgForm) {

  
  form.value.id=this.itemid
  this.Jarwis.updateCategories(form.value).subscribe(        
    data => this.handleResponse(data),
    error => this.handleError(error), 
    
  );  
}

onDelete(id: string) {

  this.Jarwis.deleteCategories(id).subscribe(  
      
    data => this.handleResponse(data),
    error => this.handleError(error), 
    
  );
  }


  onSubmit(form: NgForm) {
   
    this.Jarwis.addCategories(form.value).subscribe(
     
      data => this.handleResponse(data),
      error => this.handleError(error), 
           
    );
    
  }

  handleResponse(data) {    // 
    let snackBarRef = this.snackBar.open("Added successfully", 'Dismiss', {
      duration: 2000
    })   
    // this.router.navigateByUrl('/Admin/(side:items)');
    this.ngOnInit();
    
  }

  handleError(error) {
    this.error = error.error.errors;
    let snackBarRef = this.snackBar.open(this.error, 'Dismiss', {
      duration: 2000

    })
    
  }

  councle(){}


}

