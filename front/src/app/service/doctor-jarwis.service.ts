import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorJarwisService {

  constructor(public http: HttpClient) { }

  // private baseUrl = 'https://hms.jtcheck.com/back/backend/public/api';

  private baseUrl = 'http://localhost/check_hms_test/backend/public/api';

  getPatientData(data){
    return this.http.get(`${this.baseUrl}/patient-data/${data}`);
  }

  
  displayAppointment() {
    return this.http.get(`${this.baseUrl}/displayAppointment`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  
}
