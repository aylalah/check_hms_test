<?php
use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group([
    'middleware' => 'api',
], function () {
    
    //Settings
Route::get('setupStatus', 'SetupController@setupStatus');
Route::get('generalSettings', 'SetupController@generalSettings');

Route::post('login', 'AuthController@login');
Route::post('signup', 'AuthController@signup');
Route::post('adminLogin','AuthController@adminLogin');
Route::post('logout', 'AuthController@logout');
Route::post('refresh', 'AuthController@refresh');
Route::get('me', 'AuthController@me');
Route::post('sendPasswordResetLink', 'ResetPasswordController@sendEmail');
Route::post('resetPassword', 'ChangePasswordController@process');
Route::post('changePassword', 'ChangePasswordController@changePassword');

Route::get('gettitles/{id}','DisplayController@gettitles');
Route::get('getUtitles','DisplayController@getUtitles');
Route::get('getUcontent','DisplayController@getUContent');
Route::post('comment','CommentController@store');
Route::post('me','AuthController@updateprofile');
Route::get('roleuser', 'RoleController@roleuser');
Route::post('role','RoleController@store');
Route::post('cate','CategoryController@store');
Route::post('activity','ActivitiesController@store');
Route::post('content','ContentController@store');
Route::post('name_t','Name_titleController@store');
Route::get('getact', 'ActivitiesController@index');
Route::get('getcat', 'CategoryController@index');
Route::get('post/{id}','ContentController@getactid');
Route::get('displayartifact','DisplayController@displayartifact');
Route::get('displaybusiness','DisplayController@displaybusiness');
Route::get('displaypeople','DisplayController@displaypeople');
Route::get('displaynews','DisplayController@displaynews');

Route::post('editPriviledges', 'AuthController@editPriviledges');


Route::post('addDept', 'AddController@addDept');
Route::post('updateDept', 'AddController@updateDept');
Route::post('deleteDept', 'AddController@deleteDept');
Route::get('displayDepartments','DisplayController@displayDepartments');
Route::get('displayAllstaff','DisplayController@displayAllstaff');
Route::post('deleteUser','DisplayController@deleteUser');
Route::get('displayAllposition','DisplayController@displayAllposition');
Route::get('edtDept/{id}','DisplayController@edtDept');
Route::get('getalltitle','DisplayController@getalltitle'); 

//Dashboard
Route::get('displayModule','DisplayController@displayModule');

Route::get('displayPharAdminDash','DisplayController@displayPharAdminDash');
Route::get('displayPharAdminDashStaff','DisplayController@displayPharAdminDashStaff');

Route::get('displayPharAdminDashInvoice','DisplayController@displayPharAdminDashInvoice');
Route::post('displayPharStaffDashInvoice','DisplayController@displayPharStaffDashInvoice');

Route::get('displayPharAdminDashStock','DisplayController@displayPharAdminDashStock');
Route::post('displayPharStaffDashStock','DisplayController@displayPharStaffDashStock');

Route::get('displayPharAdminDashAppointment','DisplayController@displayPharAdminDashAppointment');
Route::post('displayPharStaffDashAppointment','DisplayController@displayPharStaffDashAppointment');

Route::post('displayPharStaffDash','DisplayController@displayPharStaffDash');





// Staff
Route::get('staffdetails/{id}','DisplayController@staffdetails');
Route::get('mydetails','DisplayController@mydetails');
Route::post('uStatus','DisplayController@uStatus');
Route::post('c_uStatus','DisplayController@c_uStatus');
Route::post('reStatus','DisplayController@reStatus');
Route::post('assign','AddController@assign');
Route::post('edtAssign','AddController@edtAssign');


//ItemDetails
Route::get('edtItemDetails/{id}','DisplayController@edtItemDetails');
Route::get('displayItemDetails','DisplayController@displayItemDetails');
Route::post('addItemDetails', 'AddController@addItemDetails');
Route::post('updateItemDetails', 'AddController@updateItemDetails');
Route::post('deleteItemDetails', 'AddController@deleteItemDetails');
Route::get('disItemDet','DisplayController@disItemDet');

//Branch
Route::get('edtBranch/{id}','DisplayController@edtBranch');
Route::get('displayBranch','DisplayController@displayBranch');
Route::get('displaysetBranch','DisplayController@displaysetBranch');
Route::post('addBranch', 'AddController@createBranch');
Route::post('updateBranch', 'AddController@updateBranch');
Route::post('deleteBranch', 'AddController@deleteBranch');

Route::post('suspendBranch', 'AddController@suspendBranch');
Route::post('activateBranch', 'AddController@activateBranch');

//Unit
Route::get('edtUnit/{id}','DisplayController@edtUnit');
Route::get('displayUnit','DisplayController@displayUnit');
Route::post('addUnit', 'AddController@addUnit');
Route::post('updateUnit', 'AddController@updateUnit');
Route::post('deleteUnit', 'AddController@deleteUnit');

//Type
Route::get('edtType/{id}','DisplayController@edtType');
Route::get('displayType','DisplayController@displayType');
Route::post('addType', 'AddController@addType');
Route::post('updateType', 'AddController@updateType');
Route::post('deleteType', 'AddController@deleteType'); 

//settings
Route::get('displayDuration','DisplayController@displayDuration');
Route::get('displayDurationForV/{id}','DisplayController@displayDurationForV');
Route::get('idDurationForV/{id}','DisplayController@idDurationForV');
Route::post('addItemType', 'AddController@addItemType');
Route::post('updateDuration', 'AddController@updateDuration');
Route::get('edtduration/{id}','DisplayController@edtduration');
Route::post('deleteDuration', 'AddController@deleteDuration');
Route::post('editvoucher','DisplayController@editVoucher');
Route::post('voucherdata','DisplayController@voucherData');


Route::get('displayInstruction','DisplayController@displayInstruction');
Route::get('idInstruction/{id}','DisplayController@idInstruction');
Route::post('updateInstruction', 'AddController@updateInstruction');
Route::get('edtinstruction/{id}','DisplayController@edtinstruction');
Route::post('addInstruction', 'AddController@addInstruction');
Route::post('deleteInstruction', 'AddController@deleteInstruction');
Route::get('edtInstruction/{id}','DisplayController@edtInstruction');
Route::post('updateInsruction', 'AddController@updateInsruction');
Route::get('displayRefill','DisplayController@displayRefill');

//Manufacturer
Route::get('edtManufacturer/{id}','DisplayController@edtManufacturer');
Route::get('displayManufacturer','DisplayController@displayManufacturer');
Route::post('addManufacturer', 'AddController@addManufacturer');
Route::post('updateManufacturer', 'AddController@updateManufacturer');
Route::post('deleteManufacturer', 'AddController@deleteManufacturer');

//Categories
Route::get('edtCategories/{id}','DisplayController@edtCategories');
Route::get('displayCategories','DisplayController@displayCategories');
Route::post('addCategories', 'AddController@addCategories');
Route::post('updateCategories', 'AddController@updateCategories');
Route::post('deleteCategories', 'AddController@deleteCategories');

//Shelve
Route::get('edtShelve/{id}','DisplayController@edtShelve');
Route::get('displayShelve','DisplayController@displayShelve');
Route::post('addShelve', 'AddController@addShelve');
Route::post('updateShelve', 'AddController@updateShelve');
Route::post('deleteShelve', 'AddController@deleteShelve');

//Item
Route::get('edtItem/{id}','DisplayController@edtItem');
Route::get('displayItem/{id}','DisplayController@displayItem');
Route::post('addItem', 'AddController@addItem');
Route::post('updateItem', 'AddController@updateItem');
Route::post('deleteItem', 'AddController@deleteItem');

//Customers / Patients
Route::get('edtCustomer/{id}','DisplayController@edtCustomer');
Route::get('displayCustomer','DisplayController@displayCustomer');
Route::get('countCustomer','DisplayController@countCustomer');
Route::post('addCustomer', 'AddController@addCustomer');
Route::post('updateCustomer', 'AddController@updateCustomer');
Route::post('deleteCustomer', 'AddController@deleteCustomer');
Route::post('makeAppointment','AddController@makeAppointment');
Route::get('patientdetails/{id}','DisplayController@patientdetails');
Route::get('customer_category','DisplayController@customer_category');
Route::get('patientbyappointment/{id}','DisplayController@patientbyappointment');
Route::post('changeCategory', 'AddController@changeCategory');

Route::post('addCustCategories', 'AddController@addCustCategories');
Route::get('displayCustomerCategory','DisplayController@displayCustomerCategory');
Route::get('edtCustCategories/{id}','DisplayController@edtCustCategories');
Route::post('updateCustCategories', 'AddController@updateCustCategories');
Route::post('deleteCustCategories', 'AddController@deleteCustCategories');



// Appointments 
Route::get('displayAllappointment','DisplayController@displayAllappointment');
Route::post('cancelPharmLog','DisplayController@cancelPharmLog');
Route::post('makeAppointment2','AddController@makeAppointment2');
Route::get('displayDeptAppointment','DisplayController@displayDeptAppointment');
Route::get('displayPharmStaffDashAppointment','DisplayController@displayPharmStaffDashAppointment');
Route::get('displayDeptAppoint/{id}','DisplayController@displayDeptAppoint');
Route::get('countAppointment','DisplayController@countAppointment');
Route::post('deleteAppointment', 'AddController@deleteAppointment');
Route::post('terminateAppointment/{id}', 'AddController@terminateAppointment');
Route::post('closeAppointment/{id}/{vid}', 'AddController@closeAppointment');

//Doctor Prescriptions
Route::get('edtPrescription/{id}','DisplayController@edtPrescription');
Route::get('displayPrescription','DisplayController@displayPrescription');
Route::post('addPrescription', 'AddController@addPrescription');
Route::post('updatePrescription', 'AddController@updatePrescription');
Route::post('deletePrescription/{id}', 'AddController@deletePrescription');
Route::post('displayPharmInvoice/{id}/{vid}','DisplayController@displayPharmInvoice');
Route::post('pharmPriscription', 'AddController@pharmPriscription');
Route::post('saveTovoucher/{id}', 'AddController@saveTovoucher');
Route::post('displayRefillPrescriptions/{id}','DisplayController@displayRefillPrescriptions');
Route::post('pres_refill_id/{id}','DisplayController@pres_refill_id');
Route::post('refillInStock','DisplayController@refillInStock');
Route::post('saveRefill','AddController@saveRefill');
Route::get('displayPharmPrescription/{id}','DisplayController@displayPharmPrescription');
Route::post('checkRefill/{id}','AddController@checkRefill');
// Route::post('deletePrescription/{id}', 'AddController@deletePrescription');  

//Invoices
Route::get('edtInvoice/{id}','DisplayController@edtInvoice');
Route::get('displayInvoice','DisplayController@displayInvoice');
Route::post('addInvoice', 'AddController@addInvoice');
Route::post('updateInvoice', 'AddController@updateInvoice');
Route::post('deleteInvoice', 'AddController@deleteInvoice');
Route::post('saveToInvoice/{id}', 'AddController@saveToInvoice');


//Vouchers
Route::get('edtVoucher/{id}','DisplayController@edtVoucher');
Route::get('displayVoucher','DisplayController@displayVoucher');
Route::post('addVoucher', 'AddController@addVoucher');
Route::post('updateVoucher', 'AddController@updateInvoice');
Route::post('deleteVoucher', 'AddController@deleteVoucher');

//Laboratory Department
Route::post('addLab', 'AddController@createLabDept');
Route::get('displayLabDepartments','DisplayController@displayLabDepartments');
Route::post('deleteLabDepartments', 'AddController@deleteLabDept');
Route::post('updateLabDept', 'AddController@updateLabDept');
Route::get('edtLabDept/{id}','DisplayController@edtLabDept');
//Laboratory Test Type
Route::post('addLabTestType', 'AddController@createLabTestType');
Route::get('displayLabTestType','DisplayController@displayLabTestType');
Route::post('deleteLabTestType', 'AddController@deleteLabTestType');
Route::post('updateLabTestType', 'AddController@updateLabTestType');
Route::get('edtLabTestType/{id}','DisplayController@edtLabTestType');

//Updating Stock
Route::get('stockBranches','DisplayController@stockBranches');
Route::post('addToStock', 'AddController@addToStock');
Route::post('transferToStock', 'AddController@transferToStock');
Route::get('saveAdd', 'AddController@saveAdd');
Route::get('saveTransfer', 'AddController@saveTransfer');
Route::get('saveVariance', 'AddController@saveVariance');
Route::post('varianceStock', 'AddController@varianceStock');
          
Route::get('varianceItems','DisplayController@varianceItems');
Route::get('addedItems','DisplayController@addedItems');
Route::get('transItems','DisplayController@transItems');
Route::get('inStock/{id}','DisplayController@inStock');
Route::post('inStockT','DisplayController@inStockT');
Route::post('voucherAllStock/{id}','DisplayController@voucherAllStock');
Route::get('editAdd/{id}', 'AddController@editAdd');
Route::post('deleteAdd', 'AddController@deleteAdd');
Route::post('updateAddItem', 'AddController@updateAddItem');
Route::post('updatetransferItem', 'AddController@updatetransferItem');

Route::get('editTrans/{id}', 'AddController@editTrans');
Route::post('deleteTrans', 'AddController@deleteTrans');

Route::get('editVariance/{id}', 'AddController@editVariance');
Route::post('deleteVariance', 'AddController@deleteVariance');
Route::post('updateVarianceItem', 'AddController@updateVarianceItem');


//Stock Report
Route::post('stockReport','DisplayController@stockReport');
Route::post('searchReport','DisplayController@searchReport');
Route::post('stockHistory','DisplayController@stockHistory');


Route::get('displayRole','DisplayController@displayRole');


Route::get('general_setting','DisplayController@general_setting');
Route::post('updateGeneralset', 'AddController@updateGeneralSet');
Route::post('addGeneralset', 'AddController@GeneralSet');
});



// DOctor Module
Route::get('patient-data/{id}', 'DoctorModule@patientData');
Route::get('displayAppointment','DoctorModule@displayAppointment');

