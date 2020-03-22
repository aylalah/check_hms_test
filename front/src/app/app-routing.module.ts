import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Auth
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordEmailComponent } from './auth/forgot-password-email/forgot-password-email.component';
import { ForgotPasswordResetComponent } from './auth/forgot-password-reset/forgot-password-reset.component';
// import { AccountComponent } from './user/account/account.component';
import { BeforeLoginService } from './service/before-login.service';
import { AfterLoginService } from './service/after-login.service';

import { DeptAdminRoleGuardService } from './service/guards/dept-admin-role-guard.service';
import { AdminRoleGuardService } from './service/guards/admin-role-guard.service';
import { StaffRoleGuardService } from './service/guards/staff-role-guard.service';
import { UserRoleGuardService } from './service/guards/user-role-guard.service';

// import { DetailsComponent } from './user/details/details.component';
import { ProfileComponent } from './admin/profile/profile.component';
// import { PostComponent } from './user/post/post.component';
// import { MypostComponent } from './user/mypost/mypost.component';
// import { AddcategoryComponent } from './addcategory/addcategory.component';
// import { AboutComponent } from './about/about.component';
// import { ContactComponent } from './contact/contact.component';
// import { UpdateComponent } from './user/update/update.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { HomeComponent } from './admin/home/home.component';
import { StaffComponent } from './admin/staff/staff.component';
import { DepertmentComponent } from './admin/depertment/depertment.component';
import { SetdepartmentComponent } from './admin/setdepartment/setdepartment.component';

// Doctor
import { DoctorHomeComponent } from './doctor/doctor-home/doctor-home.component';
import { DoctorLogComponent } from './doctor/doctor-log/doctor-log.component';
import { MakePrescriptionComponent } from './doctor/make-prescription/make-prescription.component';
import { PharmacyLogComponent } from './pharmacy/pharmacy-log/pharmacy-log.component';

// Staff
import { AllStaffComponent } from './admin/all-staff/all-staff.component';

//Payment 
import { PaymentLogComponent } from './payment/payment-log/payment-log.component';
import { PaymentHomeComponent } from './payment/payment-home/payment-home.component';
import { PHistoryComponent } from './payment/p-history/p-history.component';
import { InvoiceComponent } from './payment/invoice/invoice.component';

// Lab
import { LabLogComponent } from './lab/lab-log/lab-log.component';
import { LabHomeComponent } from './lab/lab-home/lab-home.component';
import { TestComponent } from './lab/test/test.component';
import { SetLabComponent } from './lab/set-lab/set-lab.component';
import { SetLabTestComponent } from './lab/set-lab-test/set-lab-test.component';

// Patient
import { PatientHomeComponent } from './customer/patient-home/patient-home.component';
import { PatientTaskboardComponent } from './customer/patient-taskboard/patient-taskboard.component';
import { PatientComponent } from './customer/patient/patient.component';
import { PatientDetailsComponent } from './customer/patient-details/patient-details.component';
import { MakeAppointmentComponent } from './customer/make-appointment/make-appointment.component';
import { CustomerCategoryComponent } from './customer/customer-category/customer-category.component';
import { AddPatientComponent } from './customer/add-patient/add-patient.component';

// Pharmacy
import { UnitComponent } from './pharmacy/unit/unit.component';
import { TypeComponent } from './pharmacy/type/type.component';
import { ManufacturerComponent } from './pharmacy/manufacturer/manufacturer.component';
import { CategoryComponent } from './pharmacy/category/category.component';
import { AllItemsComponent } from './pharmacy/all-items/all-items.component';
import { ShelfComponent } from './pharmacy/shelf/shelf.component';
import { ItemComponent } from './pharmacy/item/item.component';
import { PharmHomeComponent } from './pharmacy/pharm-home/pharm-home.component';
import { VoucherComponent } from './pharmacy/voucher/voucher.component';
import {SetBranchComponent } from './branches/set-branch/set-branch.component';
import { HistoryComponent } from './pharmacy/history/history.component';
import {TransHistoryComponent} from './pharmacy/trans-history/trans-history.component';
import { DurationComponent } from './pharmacy/duration/duration.component';
import { DailySupplyComponent } from './pharmacy/daily-supply/daily-supply.component';
import { RefillComponent } from './pharmacy/refill/refill.component';
import { RefillDetailsComponent } from './pharmacy/refill-details/refill-details.component';

// Dashboards
import { PhamAdminComponent } from './dashboard/pham-admin/pham-admin.component';
import { PhamUserComponent } from './dashboard/pham-user/pham-user.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { RegisterComponent } from './setup/register/register.component';
import { PatDetailComponent } from './doctor/pat-detail/pat-detail.component';
import { OpenAppointmentsComponent } from './doctor/open-appointments/open-appointments.component';
import { SuccessAppointmentsComponent } from './success-appointments/success-appointments.component';




const routes: Routes = [
  // {path: 'home', component: HomeComponent },
  {path: '', component: LoginComponent,canActivate: [BeforeLoginService] },
  {path: 'setupregister', component: RegisterComponent},
  // {path: 'Signin', component: SigninComponent,canActivate: [BeforeLoginService] },
  {path: 'forgot_password', component: ForgotPasswordEmailComponent,canActivate: [BeforeLoginService] },
  {path: 'reset_password/:token', component: ForgotPasswordResetComponent,canActivate: [BeforeLoginService] },
  {path: 'Admin', component: DashboardComponent,canActivate: [AfterLoginService],
 

  children: [
    
         {path: 'Profile/:id', component: ProfileComponent, outlet: 'side',canActivate: [AfterLoginService]},

        //  {path: 'home', component: HomeComponent, outlet: 'side',canActivate: [AfterLoginService] },
        //  {path: 'staffs', component: StaffComponent, outlet: 'side',canActivate: [AfterLoginService] },         
        //  {path: 'department', component: DepertmentComponent, outlet: 'side',canActivate: [AfterLoginService] },

         {path: 'Admin-super_admin', component: HomeComponent, outlet: 'side',canActivate: [AfterLoginService], canActivateChild: [AdminRoleGuardService]},
         {path: 'Admin-global_admin', component: HomeComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'staff', component: StaffComponent, outlet: 'side',canActivate: [AfterLoginService] },         
         {path: 'department_admin', component: DepertmentComponent, outlet: 'side',canActivate: [AfterLoginService] },

         {path: 'set_department', component: SetdepartmentComponent, outlet: 'side',canActivate: [AfterLoginService] },

         // doctor

         // Patient
         {path: 'card_home', component: PatientHomeComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'taskboard', component: PatientTaskboardComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'patient', component: PatientComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'patient_profile/:id', component: PatientDetailsComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'appointment', component: MakeAppointmentComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'patient_category', component: CustomerCategoryComponent, outlet: 'side', canActivate: [AfterLoginService] },
         {path: 'add_patient', component: AddPatientComponent, outlet: 'side', canActivate: [AfterLoginService] },

         // pharmacy
         {path: 'item_type', component: TypeComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'unit', component: UnitComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'manufacturer', component: ManufacturerComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'item_category', component: CategoryComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'items', component: AllItemsComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'shelves', component: ShelfComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'item_profile/:id', component: ItemComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'pharmacy_log', component: PharmacyLogComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'pharmacy_home', component: PharmHomeComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'voucher/:id', component: VoucherComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'history', component: HistoryComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'report', component: TransHistoryComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'duration', component: DurationComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'instruction', component: DailySupplyComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'refill', component: RefillComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'refill-details/:id', component: RefillDetailsComponent, outlet: 'side',canActivate: [AfterLoginService] },
         // Dashboard

        //  {path: 'phamarcy-admin-dashboard', component: PhamAdminComponent, outlet: 'side',canActivate: [AfterLoginService] },
        //  {path: 'phamarcy-user-dashboard', component: PhamUserComponent, outlet: 'side',canActivate: [AfterLoginService] },

         {path: 'Pharmacy-department_admin', component: PhamAdminComponent, outlet: 'side',canActivate: [AfterLoginService], canActivateChild: [DeptAdminRoleGuardService] },
         {path: 'Pharmacy-staff', component: PhamUserComponent, outlet: 'side',canActivate: [AfterLoginService], canActivateChild: [StaffRoleGuardService] },

         {path: 'admin-profile', component: AdminProfileComponent, outlet: 'side',canActivate: [AfterLoginService] },

         // Staff
         {path: 'all_staff', component: AllStaffComponent, outlet: 'side',canActivate: [AfterLoginService] },

         // Doctor
         {path: 'doctor_log', component: DoctorLogComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'open-appointments', component: OpenAppointmentsComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'success-appointments', component: SuccessAppointmentsComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'doctor_home', component: DoctorHomeComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'Surgeon-department_admin', component: DoctorLogComponent, outlet: 'side', canActivate: [AfterLoginService], canActivateChild: [DeptAdminRoleGuardService] },
         {path: 'Surgeon-staff', component: DoctorLogComponent, outlet: 'side', canActivate: [AfterLoginService], canActivateChild: [DeptAdminRoleGuardService] },
         {path: 'treatment/:id', component: MakePrescriptionComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'pat-detail/:id', component: PatDetailComponent, outlet: 'side',canActivate: [AfterLoginService] },

          // Payment
         {path: 'payment_log', component: PaymentLogComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'payment_home', component: PaymentHomeComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'payment', component: PHistoryComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'invoice/:id', component: InvoiceComponent, outlet: 'side',canActivate: [AfterLoginService] },


         // Lab
         {path: 'lab_log', component: LabLogComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'lab_home', component: LabHomeComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'test', component: TestComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'set_lab_department', component: SetLabComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'set_lab_test', component: SetLabTestComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'set_branch', component: SetBranchComponent, outlet: 'side',canActivate: [AfterLoginService] },
       
       
         //setting
        {path: 'general_setting', component: SettingsComponent, outlet: 'side',canActivate: [AfterLoginService] },
       

     ],
        }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
