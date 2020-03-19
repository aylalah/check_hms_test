import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';

declare let $ : any;

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  patID: string;
  patientResponse: any;
  inv: any;
  PharmPreresponse: any;
  prescriptions: any;
  error: any;
  result: any;

  appointID: string;
  appointResponse: any;
  voucherId: any;
  appointments: any;
  0:any;
  response: any;
  imgLink: any;

  logo:any;
setting:any;
  voucher_Id: any;
  p_date: any;
  name: any;
  othername: any;
  card_number: any;
  address: any;
  city: any;
  mobile_no: any;
  state: any;
  country: any;
  amount: any;
  invoice: any;
  status: any;
  pres: any;
  ins: any;
  durat: Object;
  disabled = false;
  isEmpty: any;
  icon: any;
  schemePercent: any;
  afterPercentCost: any;
  schemeAmt: any;
  schemePercentToView: any;
  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
    public actRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.Jarwis.general_setting().subscribe(
      data=>{
      this.setting = data;  
      this.logo= this.setting.logo;   
       console.log(this.logo)
      })
    this.actRoute.paramMap.subscribe((params => {
	    let id = params.get('id');
	    this.appointID = id;
	    this.Jarwis.patientdetails(id).subscribe(
	      data=>{
	      this.patientResponse = data;      
	      // this.inv = this.patientResponse;
	    })
  }))

  this.Jarwis.generalSettings().subscribe(
    data=>{
    this.response = data;      
    this.imgLink = this.response[0].app_url;
    this.icon = this.response[0].logo;
  })

  this.Jarwis. generalSettings().subscribe(
    data=>{
    this.response = data;      
    this.imgLink = this.response[0].app_url;
  })
  
  this.Jarwis.displayDeptAppoint(this.appointID).subscribe(
    data=>{
    this.appointResponse = data;      
    this.voucherId = this.appointResponse[0].voucher_id;
    this.appointments = this.appointResponse;
    this.invoice=this.appointments[0].invoice
  })

  this.Jarwis.displayPharmInvoice(this.appointID, 'inv', '').subscribe(
    data=>{
    this.PharmPreresponse = data;    
    this.inv = this.PharmPreresponse; 
    this.isEmpty=this.inv.isE
    this.voucher_Id=this.inv.pres[0].voucher_id;
    this.p_date=this.inv.pres[0].p_date
    this.name=this.inv.patient.name
    this.othername=this.inv.patient.othername
    this.card_number=this.inv.patient.card_number
    this.address=this.inv.patient.address
    this.city=this.inv.patient.city
    this.mobile_no=this.inv.patient.mobile_number
    this.state=this.inv.patient.state
    this.country=this.inv.patient.country
    this.amount=this.inv.totalAmount.amount
    this.status=this.inv.pres[0].status
    this.pres=this.inv.pres 
    this.schemePercentToView = 100 - this.inv.patient.pacentage_value;
    this.schemePercent = this.inv.patient.pacentage_value;
    this.afterPercentCost = this.schemePercent / 100 * this.amount + 50; 
    this.schemeAmt = (100 - this.schemePercent)  / 100 * this.amount + 50;
    })
  }
  
  saveToInvoice(){
    this.disabled = true;
    this.Jarwis.saveToInvoice(this.voucherId, '').subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),  
    );
  }
  closeAppointment(){
    if(confirm('Click OK to end the process')){
      this.Jarwis.closeAppointment(this.inv.patient.id,this.inv.pres[0].voucher_id, '').subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error),  
      );
    }
  }
  terminateAppointment(t){
    if(confirm('This will terminate the process witout ending! Click OK to terminate')){
      this.Jarwis.terminateAppointment(t.target.value, '').subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error),  
      ); 
    }
  }
  handleResponse(data) {    // 
    let snackBarRef = this.snackBar.open("Operation Successfull", 'Dismiss', {
      duration: 2000
    })   
    // this.router.navigateByUrl('/Admin/(side:catacturer');
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
  printComponent() {
    var divToPrint=document.getElementById("print-history");
    
    var style = "<style>";
    style = style + "table {width: 100%;font: 17px Calibri;}";
    style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
    style = style + "padding: 2px 3px;text-align: center;}";
    // style = style + "#cin: align:center;color:red}";
    // style = style + "#oid: align: center;}";
    style = style + "</style>";

var win = window.open('', '', 'height=700,width=700');
win.document.write(style);          //  add the style.
win.document.write(divToPrint.outerHTML);
win.document.close();
win.print();
   
}

openPrintDialogue(label){
  
  let arr = [];
    let obj = this.inv.pres;
    for(const key of obj){
      if(key.id == label){
        this.result = key
        break;
      }
    }
   
    arr.push(this.result)
        $('<iframe>', {
          name: 'myiframe',
          class: 'printFrame'
        })
        .appendTo('body')
        .contents().find('body')
        .append(`  
                <table >
                <thead>
                    <th colspan="6" class="text-center">
                        <p style="font-size: 8px">${this.setting.company_name}</p>
                        <p style="margin-top: -5px; font-size: 7px; margin-bottom: -5px;">Pharmacy Department.</p>
                        <hr>
                    </th>             
                </thead>
                <tbody>
                    <tr>
                        <td colspan="6"> 
                            <p style="font-size: 8px;  margin-top: -10px; text-align: center;"> <strong>${arr[0].generic_name} TAB</strong> : <small class="float-right">QTY:${arr[0].quantity}</small></p>
                            <p style="font-size: 7px; margin-top: -7px; text-align: center;">USE ${arr[0].duration_name}, ${arr[0].daily_name}. FOR: ${arr[0].days} DAY(S).</p>
                            <p style="font-size: 6px; margin-top: -2px; margin-bottom: -5px;"> <strong>Caution:</strong> <small class="float-right">${arr[0].caution}</small></p>
                           
                            <hr>
                        </td>                        
                    </tr>
                    <tr >
                        <td colspan="2"  style="text-align: center;">
                            <p style="font-size: 8px; margin-top: -20px;" class="m-b-0"><strong>${arr[0].doctor_id}</strong></p>                               
                            <p style="margin-top: -9px; font-size: 7px">Physician</p>                            
                        </td>
                        <td  colspan="2" style="padding-top:20px;">                            
                        </td>
                        <td colspan="2"  style="text-align: center;">
                            <p style="font-size: 8px;  margin-top: -20px;" class="m-b-0"><strong>${arr[0].firstname} ${arr[0].lastname}</strong></p>                               
                            <p style="font-size: 7px; margin-top: -9px; " >Pharmacist</p>                            
                        </td>
                    </tr>                       
                </tbody>
                </table>
        `);
        window.frames['myiframe'].focus();
        window.frames['myiframe'].print();
        arr=[];
        setTimeout(() => { $(".printFrame").remove(); }, 10);
  };
  
}
