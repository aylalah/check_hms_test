import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

declare let jQuery: any;
declare let $ : any;
declare let particlesJS : any;

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css']
})
export class VoucherComponent implements OnInit {
  generic_name: any;
  response: any;
  total: any;
  error: any;
  itemDet: any;
  prescriptions: any;
  pat: any;
  patID: any;
  duration: any;
  instruct: any;
  getInst: any;
  quantity: any;
  amt: any;
  sup: any;
  days: any;
  count: any;
  defaultCount = 1;
  math = Math;
  useFor: any;
  quant: any;
  tQuantity: any;
  patientResponse: any;
  PharmPreresponse: any;
  ItemDetresponse: any;
  Instructionresponse: any;
  AllStockresponse: any;
  DurationForVresponse: any;
  appId: any;
  prescriptionsList: any;
  voucherId: any;
  appointResponse: any;
  appointments: any;
  total_name: any;
  cat_name: any;
  type_name: any;
  total_remain: any;
  shelve_name: any;
  shelve_point: any;
  selling_price: any;
  tquant: any;
  refill: any;
  remain: any;
  tcost: any;
  prescription: any;
  voucher: any;
  invoice: any;
  imgLink: any;
  disabled = false;
  schemeCat: any;
  schemeId: any;
  schemePercent: any;
  schemePriceList: any;
  afterPercentCost: any;
  schemeAmt: any;
  schemePercentToView: any;
  catResponds: any;
  cust_cat: any;
  editdept:any;
  DurationForVresponse_id: any;
  Instructionresponse_id: any;
  amt_value: any;
  sup_id: any;
  editvoucher_id;
  editvoucher_day;
  editvoucher_desPe;
  editvoucher_preDisAmo;
  editvoucher_tatalQuant;
  editvoucher_UseForDays;
  editvoucher_totalCost;

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
    public actRoute: ActivatedRoute,
  ) { }

  ngOnInit() { 
	this.actRoute.paramMap.subscribe((params => {
	    let id = params.get('id');
	    this.appId= id;
	    this.Jarwis.patientdetails(id).subscribe(
	      data=>{
	      this.patientResponse = data;      
        this.pat = this.patientResponse;
        this.patID = this.pat[0].id;
        this.schemeCat = this.pat[0].category_name;
        this.schemeId = this.pat[0].n_h_i_s;
        this.schemePercent = this.pat[0].pacentage_value;
        this.schemePercentToView = 100 -this.pat[0].pacentage_value;
        this.schemePriceList = this.pat[0].price_list_column;
	    })
  }))
  
  this.Jarwis. generalSettings().subscribe(
    data=>{
    this.response = data;      
    this.imgLink = this.response[0].app_url;
  })
  
  // this.Jarwis.displayPharmPre(this.patID, '').subscribe(
  //   data=>{
  //   this.PharmPreresponse = data;      
  //   this.prescriptions = this.PharmPreresponse; 
  // })

  this.Jarwis.displayDeptAppoint(this.appId).subscribe(
    data=>{
    this.appointResponse = data;      
    this.voucherId = this.appointResponse[0].voucher_id;
    this.appointments = this.appointResponse[0];
    this.prescription= this.appointments.prescription;
    this.voucher= this.appointments.voucher;
    this.invoice= this.appointments.invoice;
  })

  this.Jarwis.displayPharmPre2(this.appId).subscribe(
    data=>{
    this.PharmPreresponse = data;      
    this.prescriptions = this.PharmPreresponse;
    this.tquant= this.prescriptions.tquant;
    this.refill = this.prescriptions.refill;
    this.remain = this.prescriptions.remain;
    this.tcost = this.prescriptions.tcost;
    this.afterPercentCost = this.schemePercent / 100 * this.tcost + 50; 
    this.schemeAmt = (100 - this.schemePercent)  / 100 * this.tcost + 50;
    this.prescriptionsList= this.PharmPreresponse.pres; 
  })

    this.Jarwis.disItemDet().subscribe(
      data=>{
      this.ItemDetresponse = data;      
      this.itemDet = this.ItemDetresponse;      
    })

    this.Jarwis.displayInstruction().subscribe(
      data=>{
      this.Instructionresponse = data;      
      this.instruct = this.Instructionresponse;      
    })

    this.Jarwis.customer_category().subscribe(
      data=>{
      this.catResponds = data;      
      this.cust_cat = this.catResponds;      
    })
  }

  // get(){
    
  // }
  onSelectItem(Itemid) {
    this.Jarwis.voucherAllStock(Itemid.target.value, '').subscribe(  
      data=>{
        this.AllStockresponse = data;
        this.total =this.AllStockresponse[0];
        this.generic_name= this.total.generic_name
        this.total_name= this.total.name;
        this.cat_name= this.total.cat_name;
        this.type_name= this.total.type_name;
        this.total_remain= this.total.total_remain;
        this.shelve_name= this.total.shelve_name;
        this.shelve_point= this.total.shelve_point;
        this.getInst = this.total.type_id;
        if(this.schemePriceList == 'price_2'){
          this.selling_price = this.total.price_2;
        }
        else if(this.schemePriceList == 'price_3'){
          this.selling_price = this.total.price_3;
        }
        else{
          this.selling_price= this.total.purchasing_price*this.total.markup_price;
        }
        this.ngOnInit()
        this.Jarwis.displayDurationForV(this.getInst).subscribe(
          data=>{
          this.DurationForVresponse = data;      
          this.duration = this.DurationForVresponse       
        })
      }
    );
  }

  onSelectAmount(a){
    this.amt_value = a.target.value;
    this.Jarwis.idDurationForV(this.amt_value).subscribe(
      data=>{
      this.DurationForVresponse_id = data;      
      this.amt = this.DurationForVresponse_id[0].value   

    })
     
  }
  editVoucher(){
    this.Jarwis.editVoucher(this.editvoucher_id).subscribe(data=>{
    

    })
  }

  editTrans(id){
    this.editvoucher_id=id;
    this.Jarwis.voucherData(id).subscribe(data=>{
      console.log(data[0])
      this.editvoucher_day=data[0].days;
      this.editvoucher_desPe = data[0].dispense;
      this.editvoucher_preDisAmo = data[0].quantity;
    })
    // this.amt_value = a.target.value;
    // this.Jarwis.idDurationForV(this.amt_value).subscribe(
    //   data=>{
    //   this.DurationForVresponse_id = data;      
    //   this.amt = this.DurationForVresponse_id[0].value   

    // })
     
  }

  deleteTrans(dd){

    if(confirm('Warning: You are about to delete the selected priscription.')){
      this.Jarwis.deletePrescription(dd).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error),  
      );   
     }     
  }

  onSelectDailySup(s){
    this.sup_id = s.target.value;
    this.Jarwis.idInstruction(this.sup_id).subscribe(
      data=>{
      this.Instructionresponse_id = data;      
      this.sup = this.Instructionresponse_id[0].value
  
    })  
   
  }

  putQty(d){
    this.quant = ''
    if(this.getInst == '7'){
      this.days = d.target.value
      this.tQuantity = this.amt * this.sup * this.days
      this.quantity =  this.amt * this.sup * this.days
      if(this.quantity > this.total.total_remain){
        alert('Quantity greater than quantity in stock')
        d.target.value = ''
        this.quantity = ''
        this.tQuantity = ''
        this.days = ''
      }
      this.useFor = this.days
    }
    if(this.getInst != '7'){
      this.useFor = d.target.value
    }
  }

  onSubmit_cat(form:NgForm){
      // alert(form.value);
      form.value.cust_id= this.patID;
      this.Jarwis.changeCategory(form.value).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error),  
      );
  }

  onRefill(r){
    if(this.getInst == '7'){
      if(r.target.value > 0){
        this.count = parseInt(r.target.value) 
        this.quantity = this.amt * this.sup * this.days / this.count
        this.useFor = parseInt(this.days) / parseInt(this.count)
        this.quant = this.quantity
      }else{
        this.quantity = this.amt * this.sup * this.days / this.defaultCount
        this.useFor = this.days
        this.quant = this.quantity
      }
    }
  }

  apartTablet(n){
    if(parseInt(n.target.value) > parseInt(this.total.total_remain)){
      alert('Quantity greater than quantity in stock')
      n.target.value = ''
    }
    if(parseInt(n.target.value) <= 0){
      alert('Quantity minimum is 1')
      n.target.value = ''
    }
    if(this.getInst != '7'){
      this.tQuantity = n.target.value
    }
    this.quant = n.target.value
  }

  onSubmitAdd(form: NgForm) {
    this.disabled = true;
    form.value.appointment_id=this.appId
    form.value.customer_id=this.patID
    form.value.quantity = this.quant
    form.value.voucher_id = this.voucherId
    form.value.original_qty = this.tQuantity
    form.value.days = this.useFor
    if(this.schemePriceList == 'price_2'){
      form.value.amount = this.total.price_2;
      form.value.amount_paid = parseInt(this.total.price_2) * parseInt(this.quant) 
    }
    else if(this.schemePriceList == 'price_3'){
      form.value.amount = this.total.price_3;
      form.value.amount_paid = parseInt(this.total.price_3) * parseInt(this.quant)
    }
    else{
      form.value.amount = this.total.purchasing_price*this.total.markup_price;
      form.value.amount_paid = (parseInt(this.total.purchasing_price) * parseInt(this.total.markup_price)) * parseInt(this.quant)
    }
    // form.value.amount = this.total.selling_price
    // form.value.amount_paid = parseInt(this.total.selling_price) * parseInt(this.quant)
    form.value.instock = this.total.total_remain
    // console.log(form.value)
    this.Jarwis.pharmPriscription(form.value).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),  
    );
  }

  saveTovoucher(){
    this.disabled = true;
    this.Jarwis.saveTovoucher(this.voucherId,'').subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),  
    );
  }

  handleResponse(data) {    // 
    let snackBarRef = this.snackBar.open("Operation Successfull", 'Dismiss', {
      duration: 2000
    })   
    // this.router.navigateByUrl('/Admin/(side:voucher');
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
