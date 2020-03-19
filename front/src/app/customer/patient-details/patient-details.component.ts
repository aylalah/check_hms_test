import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material';
import {FormBuilder, FormGroup, Validators, NgForm, FormControl} from "@angular/forms";

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  public submissionForm: FormGroup;
  response: any;
  pat: any;
  imgLink: any;

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
  // patoice: any;
  status: any;
  patient_image: any;
  blood_group: any;
  d_o_b: any;
  email: any;
  gender: any;
  genotype: any;
  firstname: any;
  lastname: any;
  mobile_number: any;
  remail: any;
  addres: any;
  about: any;
  image: any;
  error: any;
  appointment: any;
  prescription: any;
  n_h_i_s: any;
  age: any;
  type: any;
  occupation: any;
  marital_status: any;
  religion: any;
  next_of_kin_name: any;
  kin_relationship: any;
  next_of_kin_mobile: any;
  next_of_kin_address: any;

  constructor( 
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
    
    this.submissionForm = this.formBuilder.group(
     
      {
        fname: [''],
       oname: [''],
          email:[''],
          card_number:[''],
          genotype:[''],
          blood_group:[''],
          mobile_number:[''],
          state:[''],
          city:[''],
          gender:[''],
          address:[''],
          id:[''],
          d_o_b:[''],
          country:[''],
          n_h_i_s:[''],
          age:[''],
          religion:[''],
          next_of_kin_name:[''],
          kin_relationship:[''],
          next_of_kin_mobile:[''],
          next_of_kin_address:[''],
          marital_status:[''],
          occupation:[''],
          type:[''],

     },
   )
    this.actRoute.paramMap.subscribe((params => {
      let id = params.get('id');
      
    this.Jarwis.patientbyappointment(id).subscribe(
        data=>{
        this.response = data; 
        this.appointment=this.response.app;
        this.prescription=this.response.pres;
        this.pat = this.response.pat;
        this.name=this.pat[0].name;
        this.othername=this.pat[0].othername;
        this.card_number=this.pat[0].card_number;
        this.address=this.pat[0].address;
        this.city=this.pat[0].city;
        this.mobile_no=this.pat[0].mobile_number;
        this.state=this.pat[0].state;
        this.country=this.pat[0].country;
        // this.status=this.pat[0].status
        this.patient_image= this.pat[0].patient_image;
        this.blood_group=this.pat[0].blood_group;
        this.email=this.pat[0].email;
        this.d_o_b=this.pat[0].d_o_b;
        this.gender=this.pat[0].gender;
        this.genotype= this.pat[0].genotype;
        this.n_h_i_s = this.pat[0].n_h_i_s;
        this.age = this.pat[0].age;
        this.type = this.pat[0].type;
        this.occupation = this.pat[0].occupation;
        this.marital_status = this.pat[0].marital_status;
        this.religion = this.pat[0].religion;
        this.next_of_kin_name = this.pat[0].next_of_kin_name;
        this.kin_relationship = this.pat[0].kin_relationship;
        this.next_of_kin_mobile = this.pat[0].next_of_kin_mobile;
        this.next_of_kin_address = this.pat[0].next_of_kin_address;


      this.submissionForm = this.formBuilder.group(
    
        {
          fname:[this.name],
          oname:[this.othername],
          email:[this.pat[0].email],
          card_number:[this.card_number],
          genotype:[this.genotype],
          blood_group:[this.blood_group],
          mobile_number:[this.mobile_no],
          state:[this.pat[0].state],
          city:[this.pat[0].city],
          gender:[this.pat[0].gender],
          address:[this.pat[0].address],
          id:[this.pat[0].id],
          d_o_b:[this.pat[0].d_o_b],
          country:[this.pat[0].country],
          n_h_i_s:[this.pat[0].n_h_i_s],
          age:[this.pat[0].age],
          type:[this.pat[0].type],
          occupation:[this.pat[0].occupation],
          marital_status:[this.pat[0].marital_status],
          religion:[this.pat[0].religion],
          next_of_kin_name:[this.pat[0].next_of_kin_name],
          kin_relationship:[this.pat[0].kin_relationship],
          next_of_kin_mobile:[this.pat[0].next_of_kin_mobile],
          next_of_kin_address:[this.pat[0].next_of_kin_address],
        },
      )
      this.image=this.pat[0].patient_image
    })
  
  }))
 
}
uploadFile(event){
  let files =event.target.files[0];
  let reader = new FileReader();
  let vm = this;
  reader.onloadend =()=> {
    
    this.image = reader.result;
 
  }
  reader.readAsDataURL(files);
}
onSubmitprofile() {
  this.Jarwis.updateCustomer({formdata:this.submissionForm.value,image:this.image}).subscribe(
    data => this.handleResponsep(data),
   error => this.handleErrorp(error)
 );
 
}
handleErrorp(error) {
 
  this.error = error.error.errors;
  console.log(this.error);
  
}
handleResponsep(data) {  
  let snackBarRef = this.snackBar.open("Operation Successfull", 'Dismiss', {
    duration: 2000
  })  
  this.ngOnInit()
}
}
