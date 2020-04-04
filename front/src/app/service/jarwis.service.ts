import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable(
  {
  providedIn: 'root'}
)
export class JarwisService {
  displayshelvegories() {
    throw new Error("Method not implemented.");
  }
  edtshelvegories(id: string) {
    throw new Error("Method not implemented.");
  }
  updateshelvegories(value: any) {
    throw new Error("Method not implemented.");
  }
  deleteshelvegories(id: string) {
    throw new Error("Method not implemented.");
  }
  addshelvegories(value: any) {
    throw new Error("Method not implemented.");
  }
  displaycatacturer() {
    throw new Error("Method not implemented.");
  }
  edtcatacturer(id: string) {
    throw new Error("Method not implemented.");
  }
  updatecatacturer(value: any) {
    throw new Error("Method not implemented.");
  }
  deletecatacturer(id: string) {
    throw new Error("Method not implemented.");
  }
  addcatacturer(value: any) {
    throw new Error("Method not implemented.");
  }
  displayPosition() {
    throw new Error("Method not implemented.");
  }

  // private baseUrl = 'https://buthserver.checkhms.com/back/backend/public/api';

  // private baseUrl = 'https://hms.jtcheck.com/back/backend/public/api';

  private baseUrl = 'http://localhost/check_hms_test/backend/public/api';

  

  constructor(private http: HttpClient) { }

  setupStatus() {
    return this.http.get(`${this.baseUrl}/setupStatus`)
  }

  generalSettings() {
    return this.http.get(`${this.baseUrl}/generalSettings`)
  }

  roleuser() {
    return this.http.get(`${this.baseUrl}/roleuser`)
  }
  signup(data) {
    return this.http.post(`${this.baseUrl}/signup`, data)
  }
  updatecontent(data) {
    return this.http.post(`${this.baseUrl}/updatecontent`, data)
  }
  role(data) {
    return this.http.post(`${this.baseUrl}/role`, data)
  }
  activity(data) {
    return this.http.post(`${this.baseUrl}/activity`, data)
  }
  cate(data) {
    return this.http.post(`${this.baseUrl}/cate`, data)
  }
  
  content(data) {
    return this.http.post(`${this.baseUrl}/content`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  
  name_t(data) {
    return this.http.post(`${this.baseUrl}/name_t`, data)
  }
  
  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data)
  }
  getact() {
    return this.http.get(`${this.baseUrl}/getact`,)
  }
  
  updateprofile(data) {
    return this.http.post(`${this.baseUrl}/me`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  post(id:string) {

    return this.http.get(`${this.baseUrl}/post/${id}`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  } 

  // Type
  displayType() {
    return this.http.get(`${this.baseUrl}/displayType`,)
  }
  edtType(id:string) {
    return this.http.get<any>(`${this.baseUrl}/edtType/${id}`)
  }
  addType(data) {
    return this.http.post(`${this.baseUrl}/addType`, data)
  }
  addItemType(data) {
    return this.http.post(`${this.baseUrl}/addItemType`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  addInstruction(data) {
    return this.http.post(`${this.baseUrl}/addInstruction`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  updateType(data) {
    return this.http.post(`${this.baseUrl}/updateType`, data)
  }
  deleteType(data) {
    return this.http.post(`${this.baseUrl}/deleteType`, data)
  }




  // Branch
  displayBranch() {
    return this.http.get(`${this.baseUrl}/displayBranch`,)
  }
  displaysetBranch() {
    return this.http.get(`${this.baseUrl}/displaysetBranch`,)
  }
  edtBranch(id:string) {
    return this.http.get<any>(`${this.baseUrl}/edtBranch/${id}`)
  }
  addBranch(data) {
    return this.http.post(`${this.baseUrl}/addBranch`, data)
  }
  updateBranch(data) {
    return this.http.post(`${this.baseUrl}/updateBranch`, data)
  }
  deleteBranch(data) {
    return this.http.post(`${this.baseUrl}/deleteBranch`, data)
  }
  suspendBranch(data) {
    return this.http.post(`${this.baseUrl}/suspendBranch`, data)
  }
  activateBranch(data) {
    return this.http.post(`${this.baseUrl}/activateBranch`, data)
  }

  
  // Shelve
  displayShelve() {
    return this.http.get(`${this.baseUrl}/displayShelve`,)
  }
  edtShelve(id:string) {
    return this.http.get<any>(`${this.baseUrl}/edtShelve/${id}`)
  }
  addShelve(data) {
    return this.http.post(`${this.baseUrl}/addShelve`, data)
  }
  updateShelve(data) {
    return this.http.post(`${this.baseUrl}/updateShelve`, data)
  }
  deleteShelve(data) {
    return this.http.post(`${this.baseUrl}/deleteShelve`, data)
  }


  // ItemDetails
  displayItemDetails() {
    return this.http.get(`${this.baseUrl}/displayItemDetails`,)
  }
  edtItemDetails(id:string) {
    return this.http.get<any>(`${this.baseUrl}/edtItemDetails/${id}`)
  }
  addItemDetails(data) {
    return this.http.post(`${this.baseUrl}/addItemDetails`, data, {headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  updateItemDetails(data) {
    return this.http.post(`${this.baseUrl}/updateItemDetails`, data)
  }
  deleteItemDetails(data) {
    return this.http.post(`${this.baseUrl}/deleteItemDetails`, data)
  }
  disItemDet() {
    return this.http.get(`${this.baseUrl}/disItemDet`,)
  }   

  // Item
  displayItem(id: any) {
    return this.http.get<any>(`${this.baseUrl}/displayItem/${id}`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  edtItem(id:string) {
    return this.http.get<any>(`${this.baseUrl}/edtItem/${id}`)
  }
  addItem(data) {
    return this.http.post(`${this.baseUrl}/addItem`, data)
  }
  updateItem(data) {
    return this.http.post(`${this.baseUrl}/updateItem`, data)
  }
  deleteItem(data) {
    return this.http.post(`${this.baseUrl}/deleteItem`, data)
  }

   // Categories
   displayCategories() {
    return this.http.get(`${this.baseUrl}/displayCategories`,)
  }
  edtCategories(id:string) {
    return this.http.get<any>(`${this.baseUrl}/edtCategories/${id}`)
  }
  addCategories(data) {
    return this.http.post(`${this.baseUrl}/addCategories`, data)
  }
  updateCategories(data) {
    return this.http.post(`${this.baseUrl}/updateCategories`, data)
  }
  deleteCategories(data) {
    return this.http.post(`${this.baseUrl}/deleteCategories`, data)
  } 
  
  //Manufacturer
  displayManufacturer() {
    return this.http.get(`${this.baseUrl}/displayManufacturer`,)
  }
  edtManufacturer(id:string) {
    return this.http.get<any>(`${this.baseUrl}/edtManufacturer/${id}`)
  }
  addManufacturer(data) {
    return this.http.post(`${this.baseUrl}/addManufacturer`, data)
  }
  updateManufacturer(data) {
    return this.http.post(`${this.baseUrl}/updateManufacturer`, data)
  }
  deleteManufacturer(data) {
    return this.http.post(`${this.baseUrl}/deleteManufacturer`, data)
  } 

  // settings
  displayDuration() {
    return this.http.get(`${this.baseUrl}/displayDuration`,)
  }

  displayRefill() {
    return this.http.get(`${this.baseUrl}/displayRefill`,)
  }
  updateInsruction(data) {
    return this.http.post(`${this.baseUrl}/updateInsruction`, data, {headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  displayDurationForV(id: any) {
    return this.http.get(`${this.baseUrl}/displayDurationForV/${id}`,)
  }

  idDurationForV(id: any) {
    return this.http.get(`${this.baseUrl}/idDurationForV/${id}`,)
  }

  updateDuration(data) {
    return this.http.post(`${this.baseUrl}/updateDuration`, data, {headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  edtduration(id:any) {
    return this.http.get<any>(`${this.baseUrl}/edtduration/${id}`)
  }
  edtInstruction(id:any) {
    return this.http.get<any>(`${this.baseUrl}/edtInstruction/${id}`)
  }
  deleteDuration(data) {
    return this.http.post(`${this.baseUrl}/deleteDuration`, data)
  }


  updateInstruction(data) {
    return this.http.post(`${this.baseUrl}/updateInstruction`, data, {headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }         
  deleteInstruction(data) {
    return this.http.post(`${this.baseUrl}/deleteInstruction`, data)
  } 
  displayInstruction() {
    return this.http.get(`${this.baseUrl}/displayInstruction`,)
  }

  idInstruction(id: any) {
    return this.http.get(`${this.baseUrl}/idInstruction/${id}`,)
  }

  edtinstruction(id:any) {
    return this.http.get<any>(`${this.baseUrl}/edtinstruction/${id}`)
  }

  //Units
  displayUnit() {
    return this.http.get(`${this.baseUrl}/displayUnit`,)
  }
  edtUnit(id:string) {
    return this.http.get<any>(`${this.baseUrl}/edtUnit/${id}`)
  }
  addUnit(data) {
    return this.http.post(`${this.baseUrl}/addUnit`, data)
  }
  updateUnit(data) {
    return this.http.post(`${this.baseUrl}/updateUnit`, data)
  }
  deleteUnit(data) {
    return this.http.post(`${this.baseUrl}/deleteUnit`, data)
  } 
 
  
  //Department
  edtDept(id:string) {
    return this.http.get<any>(`${this.baseUrl}/edtDept/${id}`)
  }
  addDept(data) {
    return this.http.post(`${this.baseUrl}/addDept`, data)
  }
  updateDept(data) {
    return this.http.post(`${this.baseUrl}/updateDept`, data)
  }
  deleteDept(data) {
    return this.http.post(`${this.baseUrl}/deleteDept`, data)
  }  
  displayAllposition() {
    return this.http.get(`${this.baseUrl}/displayAllposition`,)
  }

  displayModule() {
    return this.http.get(`${this.baseUrl}/displayModule`,)
  }

  displayDepartments() {
    return this.http.get(`${this.baseUrl}/displayDepartments`,)
  }

  // Staffs
  displayAllstaff() {
    return this.http.get(`${this.baseUrl}/displayAllstaff`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  uStatus(data) {
    return this.http.post<any>(`${this.baseUrl}/uStatus`, data)
  }
  c_uStatus(data) {
    return this.http.post<any>(`${this.baseUrl}/c_uStatus`, data)
  }
  reStatus(data) {
    return this.http.post<any>(`${this.baseUrl}/reStatus`, data)
  }
  deleteUser(data) { 
    return this.http.post<any>(`${this.baseUrl}/deleteUser`, data)
  }

  changePassword(data) { 
    return this.http.post<any>(`${this.baseUrl}/changePassword`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }

  sendPasswordResetLink(data) {
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, data)
  }

  resetPassword(data) {
    return this.http.post(`${this.baseUrl}/resetPassword`, data)
  }

  staffdetails(id:string) {
    return this.http.get<any>(`${this.baseUrl}/staffdetails/${id}`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  profile() {
    return this.http.get(`${this.baseUrl}/me`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }

  editPriviledges(data) {
    return this.http.post<any>(`${this.baseUrl}/editPriviledges`, data)
  }
  
// Branches
// displayCategories() {
//   return this.http.get(`${this.baseUrl}/displayCategories`,)
// }
// edtCategories(id:string) {
//   return this.http.get<any>(`${this.baseUrl}/edtCategories/${id}`)
// }
  createBranch(data) {
  return this.http.post(`${this.baseUrl}/addBranch`, data,{headers:{
    Authorization:`Bearer ${localStorage.token}`
  }})
  }
// updateCategories(data) {
//   return this.http.post(`${this.baseUrl}/updateCategories`, data)
// }
// deleteCategories(data) {
//   return this.http.post(`${this.baseUrl}/deleteCategories`, data)
// } 


// Customer
displayCustomer() {
  return this.http.get(`${this.baseUrl}/displayCustomer`,)
}

countCustomer() {
  return this.http.get(`${this.baseUrl}/countCustomer`,)
}

addCustomer(data) {
  return this.http.post(`${this.baseUrl}/addCustomer`, data)
}
updateCustomer(data) {
  return this.http.post(`${this.baseUrl}/updateCustomer`, data)
}
patientdetails(id:string) {
  return this.http.get<any>(`${this.baseUrl}/patientdetails/${id}`)
}
customer_category() {
  return this.http.get<any>(`${this.baseUrl}/customer_category`)
}
patientbyappointment(id:string) {
  return this.http.get<any>(`${this.baseUrl}/patientbyappointment/${id}`)
}
makeAppointment(data) {
  return this.http.post<any>(`${this.baseUrl}/makeAppointment`, data,{headers:{
    Authorization:`Bearer ${localStorage.token}`
  }})
} 

makeAppointment2(data) {
  return this.http.post<any>(`${this.baseUrl}/makeAppointment2`, data,{headers:{
    Authorization:`Bearer ${localStorage.token}`
  }})
}

//Category (PATIENTS)

changeCategory(data) {
  return this.http.post<any>(`${this.baseUrl}/changeCategory`, data,{headers:{ 
    Authorization:`Bearer ${localStorage.token}`
    }})
  }
displayCustomerCategory() {
  return this.http.get(`${this.baseUrl}/displayCustomerCategory`,)
}
updateCustCategories(data) {
  return this.http.post(`${this.baseUrl}/updateCustCategories`, data,{headers:{
    Authorization:`Bearer ${localStorage.token}`
  }})
}
deleteCustCategories(data) {
  return this.http.post(`${this.baseUrl}/deleteCustCategories`, data)
} 
edtCustCategories(id:string) {
  return this.http.get<any>(`${this.baseUrl}/edtCustCategories/${id}`)
}
addCustCategories(data) {
  return this.http.post(`${this.baseUrl}/addCustCategories`, data,{headers:{
    Authorization:`Bearer ${localStorage.token}`
  }})
}

//Appointment 
displayAllappointment() {
  return this.http.get(`${this.baseUrl}/displayAllappointment`,)
}
// nextPage(data){
//   return this.http.get(data)
// }

displayDeptAppointment() {
  return this.http.get(`${this.baseUrl}/displayDeptAppointment`,{headers:{
    Authorization:`Bearer ${localStorage.token}`
  }})
}

displayPharmStaffDashAppointment() {
  return this.http.get(`${this.baseUrl}/displayPharmStaffDashAppointment`,{headers:{
    Authorization:`Bearer ${localStorage.token}`
  }})
}

displayDeptAppoint(id:string) {
  return this.http.get<any>(`${this.baseUrl}/displayDeptAppoint/${id}`,{headers:{
    Authorization:`Bearer ${localStorage.token}`
  }})
}

countAppointment() {
  return this.http.get(`${this.baseUrl}/countAppointment`,{headers:{
    Authorization:`Bearer ${localStorage.token}`
  }})
}
deleteAppointment(data) {
  return this.http.post(`${this.baseUrl}/deleteAppointment`, data)
} 


//Laboratory Departments
  addLaboratory(data) {
    return this.http.post(`${this.baseUrl}/addLab`, data)
  }
  displayLabDepartments() {
    return this.http.get(`${this.baseUrl}/displayLabDepartments`,)
  }
  updateLabDept(data) {
    return this.http.post(`${this.baseUrl}/updateLabDept`, data)
  }
  deleteLabDepartments(data) {
    return this.http.post(`${this.baseUrl}/deleteLabDepartments`, data)
  } 
  edtLabDept(id:string) {
    return this.http.get<any>(`${this.baseUrl}/edtLabDept/${id}`)
  }


  //Laboratory Test Types
  addLaboratoryTest(data) {
    return this.http.post(`${this.baseUrl}/addLabTestType`, data)
  }
  displayLabTestType() {
    return this.http.get(`${this.baseUrl}/displayLabTestType`,)
  }
  updateLabTestType(data) {
    return this.http.post(`${this.baseUrl}/updateLabTestType`, data)
  }
  deleteLabTestType(data) {
    return this.http.post(`${this.baseUrl}/deleteLabTestType`, data)
  } 
  edtLabTestType(id:string) {
    return this.http.get<any>(`${this.baseUrl}/edtLabTestType/${id}`)
  }

  displayStockBranches() {
    return this.http.get(`${this.baseUrl}/stockBranches`,)
  }
  
  addToStock(data) {
    return this.http.post(`${this.baseUrl}/addToStock`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }

  transToStock(data) {
    return this.http.post(`${this.baseUrl}/transferToStock`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }

  varianceStock(data) {
    return this.http.post(`${this.baseUrl}/varianceStock`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }

  displayAdded() {
      return this.http.get(`${this.baseUrl}/addedItems`,)
  }

  varianceItems() {
    return this.http.get(`${this.baseUrl}/varianceItems`,)
}

  displayTransferred() {
      return this.http.get(`${this.baseUrl}/transItems`,)
  }

  displayInstock(id:string) {
    return this.http.get<any>(`${this.baseUrl}/inStock/${id}`)
  }
  voucherAllStock(id:string, data) {
    return this.http.post<any>(`${this.baseUrl}/voucherAllStock/${id}`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }

  displayInstockT(data) {
    return this.http.post<any>(`${this.baseUrl}/inStockT`, data)
  }

  saveAdd() {
    return this.http.get(`${this.baseUrl}/saveAdd`)
  }

  saveTransfer() {
    return this.http.get(`${this.baseUrl}/saveTransfer`)
  }

  saveVariance() {
    return this.http.get(`${this.baseUrl}/saveVariance`)
  }

  editAdd(id:string) {
    return this.http.get<any>(`${this.baseUrl}/editAdd/${id}`)
  }

  deleteAdd(data) {
    return this.http.post(`${this.baseUrl}/deleteAdd`, data)
  }
  updateAddItem(data) {
    return this.http.post(`${this.baseUrl}/updateAddItem`, data)
  }
  updatetransferItem(data) {
    return this.http.post(`${this.baseUrl}/updatetransferItem`, data)
  }
  editTrans(id:string) {
    return this.http.get<any>(`${this.baseUrl}/editTrans/${id}`)
  }

  deleteTrans(data) {
    return this.http.post(`${this.baseUrl}/deleteTrans`, data)
  }
  
  editVariance(id:string) {
    return this.http.get<any>(`${this.baseUrl}/editVariance/${id}`)
  }
  deleteVariance(data) {
    return this.http.post(`${this.baseUrl}/deleteVariance`, data)
  }
  updateVarianceItem(data) {
    return this.http.post(`${this.baseUrl}/updateVarianceItem`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  stockHistory(data) {
    return this.http.post(`${this.baseUrl}/stockHistory`, data)
  }
  stockReport(data) {
    return this.http.post(`${this.baseUrl}/stockReport`, data)
  }

  pharmPriscription(data) {
    return this.http.post(`${this.baseUrl}/pharmPriscription`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  } 

  displayPharmInvoice(id: any, vid:any ,data) {
    return this.http.post<any>(`${this.baseUrl}/displayPharmInvoice/${id}/${vid}`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  } 

  displayRefillPrescriptions(id: any, data) {
    return this.http.post<any>(`${this.baseUrl}/displayRefillPrescriptions/${id}`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }

  pres_refill_id(id: any) {
    return this.http.post<any>(`${this.baseUrl}/pres_refill_id/${id}`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }


  refillInStock(id:any, data) {
    return this.http.post<any>(`${this.baseUrl}/refillInStock/${id}`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  
  saveRefill(data) {
    return this.http.post(`${this.baseUrl}/saveRefill`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }  

  checkRefill(id: any) {
    return this.http.post<any>(`${this.baseUrl}/checkRefill/${id}`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }

  displayPharmPre2(id:string) {
    return this.http.get<any>(`${this.baseUrl}/displayPharmPrescription/${id}`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }

  deletePrescription(id:string) {
    return this.http.post<any>(`${this.baseUrl}/deletePrescription/${id}`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }

  saveTovoucher(id: any, data) {
    return this.http.post(`${this.baseUrl}/saveTovoucher/${id}`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }

  saveToInvoice(id: any, data) {
    return this.http.post(`${this.baseUrl}/saveToInvoice/${id}`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }

  terminateAppointment(id: any, data) {
    return this.http.post(`${this.baseUrl}/terminateAppointment/${id}`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }

  closeAppointment(id: any,vid: any, data) {
    return this.http.post(`${this.baseUrl}/closeAppointment/${id}/${vid}`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }

  displayRole() {
    return this.http.get(`${this.baseUrl}/displayRole`,)
  }



//DASHBOARDS

displayPharAdminDash() {
  return this.http.get(`${this.baseUrl}/displayPharAdminDash`)
}

displayPharAdminDashStaff() {
  return this.http.get(`${this.baseUrl}/displayPharAdminDashStaff`)
}

displayPharAdminDashInvoice() {
  return this.http.get(`${this.baseUrl}/displayPharAdminDashInvoice`)
}

displayPharStaffDashInvoice(data) {
  return this.http.post(`${this.baseUrl}/displayPharStaffDashInvoice`, data,{headers:{
    Authorization:`Bearer ${localStorage.token}`
  }})
}

displayPharAdminDashStock() {
  return this.http.get(`${this.baseUrl}/displayPharAdminDashStock`)
}

displayPharStaffDashStock(data) {
  return this.http.post(`${this.baseUrl}/displayPharStaffDashStock`, data,{headers:{
    Authorization:`Bearer ${localStorage.token}`
  }})
}

displayPharAdminDashAppointment() {
  return this.http.get(`${this.baseUrl}/displayPharAdminDashAppointment`)
}

displayPharStaffDashAppointment(data) {
  return this.http.post(`${this.baseUrl}/displayPharStaffDashAppointment`, data,{headers:{
    Authorization:`Bearer ${localStorage.token}`
  }})
}

displayPharStaffDash(data) {
  return this.http.post(`${this.baseUrl}/displayPharStaffDash`, data,{headers:{
    Authorization:`Bearer ${localStorage.token}`
  }})
}



  getcontent(id:string) {
    return this.http.get(`${this.baseUrl}/getcontent/${id}`)
  }
  getcontentonly(id:string) {
    return this.http.get(`${this.baseUrl}/getcontentonly/${id}`)
  }
  getalltitle() {
    return this.http.get(`${this.baseUrl}/getalltitle`,)
  }
  getfootertitle() {
    return this.http.get(`${this.baseUrl}/getfootertitle`,)
  }
  gettitles(id:string) {
    return this.http.get(`${this.baseUrl}/gettitles/${id}`)
  }
  getUtitles() {
    return this.http.get(`${this.baseUrl}/getUtitles`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  getUcontent() {
    return this.http.get(`${this.baseUrl}/getUcontent`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
//  search(searchTerm:string) {
//     return this.http.get(`${this.baseUrl}/getalltitle/${searchTerm}`)
//   }

comment(data) {
  return this.http.post(`${this.baseUrl}/comment`, data,{headers:{
    Authorization:`Bearer ${localStorage.token}`
  }})
}

general_setting() {
  return this.http.get(`${this.baseUrl}/general_setting`,)
}
updateGeneralSet(data) {
  return this.http.post(`${this.baseUrl}/updateGeneralset`, data)
}
addGeneralSet(data) {
  return this.http.post(`${this.baseUrl}/addGeneralset`, data)
}
cncel_pharm_log(data){
 return this.http.post<any>(`${this.baseUrl}/cancelPharmLog`,data,{headers:{Authorization:`Bearer ${localStorage.token}`}}
)
}
voucherData(data){
 return this.http.post<any>(`${this.baseUrl}/voucherdata`,data,{headers:{Authorization:`Bearer ${localStorage.token}`}}
)
}
editVoucher(data){
  return this.http.post<any>(`${this.baseUrl}/editvoucher`,data,{headers:{Authorization:`Bearer ${localStorage.token}`}}
 )
 }

}