$(document).on('pageshow', '#pagedesign_completed', function(){  

//alert('pagedesign_completed');
$('#sda_newvericom').empty();
$('#lii_newvericom').empty();
$('.document_imag_inproone_veria_c').empty();
$('.document_imag_inproone_verib_c').empty();
$('.document_imag_inproone_veric_c').empty();
$('.document_imag_inproone_verid_c').empty();
$('.document_imag_inproone_verie_c').empty();
$('.document_imag_inproone_verif_c').empty();

$(document).off('click', '#dashinvnccc').on('click', '#dashinvnccc', function() {

$.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#inprogressinvnccc').on('click', '#inprogressinvnccc', function() {

$.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#before_verified_inc').on('click', '#before_verified_inc', function() {

$.mobile.changePage($('#supervisor_completed_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#verifiedinvnccc').on('click', '#verifiedinvnccc', function() {

$.mobile.changePage($('#supervisor_inprogress_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#not_verifiedinvnccc').on('click', '#not_verifiedinvnccc', function() {

$.mobile.changePage($('#supervisor_verified_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#completedinvnccc').on('click', '#completedinvnccc', function() {

  $.mobile.changePage($('#supervisor_list_notveri'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

$(document).off('click', '#signoutinvnccc').on('click', '#signoutinvnccc', function() {
  sessionStorage.clear(); 

  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
  return false;
});
/*end*/


//alert("success");
$('.document_imag_veri').empty();
$('#percent_veri').empty();
//$('#name').empty();
assignValues();

superArray_array =  JSON.parse(sessionStorage.getItem("supervisor_view_new_veri_array"));

supervisor_view_verified_array =  JSON.parse(sessionStorage.getItem("supervisor_verified_array"));




function assignValues(){
  region_array = JSON.parse(sessionStorage.getItem("regionArray"));
  user_obja = JSON.parse(sessionStorage.getItem("currentobj_veri"));

  currentobja_addressid = JSON.parse(sessionStorage.getItem("currentobja_addressid_veri"));


currentobj_educational_records = JSON.parse(sessionStorage.getItem("currentobj_educational_records_veri"));
// alert( currentobj_educational_records.user_id+'education');
currentobj_employment_records = JSON.parse(sessionStorage.getItem("currentobja_emnployment_veri"));

addressid_records_array =  JSON.parse(sessionStorage.getItem("addressid_records_array"));

employment_upload_array = JSON.parse(sessionStorage.getItem("multiple_documents_array"));

supervisor_final_commanda =  JSON.parse(sessionStorage.getItem("supervisor_final_commanda"));

coordinator_final_commanda = JSON.parse(sessionStorage.getItem("coordinator_final_commanda"));

var qualification_id = user_obja.type;
//alert(qualification_id+'qqqqqqqqqq');
//alert(user_obja.type+'type');
var verification_user_id = user_obja.verification_user_id;
//alert(verification_user_id +'verification_user_id');
var city = user_obja.city_name;
//alert(city);
var state = user_obja.state;
//alert(state);

var region_num=region_array.region;
//alert(region_array.region+'regionnnnnn');

var superfin =supervisor_final_commanda;
if (superfin !== null){
$("#supp").text(supervisor_final_commanda.final_Command);
}
var cofin =coordinator_final_commanda;
if( cofin !== null){
$("#co").text(coordinator_final_commanda.comment);
}
regionArray_array =  JSON.parse(sessionStorage.getItem("regionArray"));
username=regionArray_array.username;
//alert(username);
$("#userlistinvnfg").text(username);


if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/degree-icon.png" class="iomg" alt=""><p class="pri_p">'+user_obja.qualification_name+'</p><span class="pri_span">Task Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/yearofpassing-icon.png" class="iomg" alt=""><p class="pri_p">'+currentobj_employment_records.employee_final_salary+'</p><span class="pri_span">Salary</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/percentage.png" class="iomg" alt=""><p class="pri_p">'+user_obja.city_name+'</p><span class="pri_span">City</span></div>'
$('#sda_newvericom').append(sd);
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+currentobj_employment_records.working_from+'&nbsp;To &nbsp;'+currentobj_employment_records.working_to+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_addressone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_zipcode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
$('#lii_newvericom').append(liii);


/*  var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/degree-icon.png" alt=""><p class="pri_p">'+user_obja.qualification_name+'</p><span class="pri_span">Degree</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/yearofpassing-icon.png" alt=""><p class="pri_p">'+currentobj_employment_records.employee_final_salary+'</p><span class="pri_span">Salary</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/percentage.png" alt=""><p class="pri_p">'+user_obja.city_name+'</p><span class="pri_span">City</span></div>'
$('#sda_newvericom').append(sd);
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_addressone+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Tam</p></li>'
$('#lii_newvericom').append(liii);
*/

  var oneemploy = new Array(10);
  k = -1;
  for(a=0;a<employment_upload_array.length;a++){

    employimg_obj = employment_upload_array[a];

    var empimgempl=employimg_obj.verification_type_id;
    var empidempl=employimg_obj.verification_master_id;


    if(empimgempl == qualification_id && empidempl == verification_user_id ){

     // alert(a);
      k++;
      oneemploy[k]=employimg_obj.document;

      if (k == 0 ){
        var one=oneemploy[k];
       // alert(one+'oneempeeeducation');
        $('.document_imag_inproone_veric_c').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+one+'" alt="Band"  class="rondell-item-image rondell-item-resizeable">');


      }
      if (k == 1 ){
        var oneo=oneemploy[k];
        //alert(oneo+'two');
        $('.document_imag_inproone_verid_c').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

      }
      if (k == 2 ){
        var oneo=oneemploy[k];
        //alert(oneo+'two');
        $('.document_imag_inproone_verib_c').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

      }
      if (k == 3 ){
        var oneo=oneemploy[k];
        //alert(oneo+'two');
        $('.document_imag_inproone_veria_c').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

      }
      if (k == 4 ){
        var oneo=oneemploy[k];
        //alert(oneo+'two');
        $('.document_imag_inproone_verie_c').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

      }
      if (k == 5 ){
        var oneo=oneemploy[k];
       // alert(oneo+'two');
        $('.document_imag_inproone_verif_c').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

      }

$('#from_qwe').html(' <h1 class="sdah1">From-To</h1><p class="sdap">'+currentobj_employment_records.working_from+'</p><p class="sdap">'+currentobj_employment_records.working_to+'</p>');
$('#designation_qwe').html('<h1 class="sdah1">Company</h1><p class="sdap">'+currentobj_employment_records.employer_name+'</p>');
$('#percentage_qwe').html('<h1 class="sdah1">Salary</h1><p class="sdap">'+currentobj_employment_records.employee_final_salary+'</p>');
$('#year_of_passing_veriiio_qwe').html('<h1 class="sdah1">location</h1><p class="sdap">'+currentobj_employment_records.employer_addressone+'</p>');
$('#institute_inproo_qwe').text(user_obja.qualification_name);
$('#address_inproo_qwe').text(currentobj_employment_records.employer_addressone);
$('#pincode_inproo_qwe').text(currentobj_employment_records.employer_zipcode);


    }

  }

}


if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){
/*    var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/degree-icon.png" alt=""><p class="pri_p">'+user_obja.qualification_name+'</p><span class="pri_span">Degree</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/yearofpassing-icon.png" alt=""><p class="pri_p">'+currentobj_educational_records.year_of_passing+'</p><span class="pri_span">Year_of_passing</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/percentage.png" alt=""><p class="pri_p">'+currentobj_educational_records.percentage+'</p><span class="pri_span">Percentage</span></div>'
$('#sda_newvericom').append(sd);
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.institute_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li>'
$('#lii_newvericom').append(liii);
*/
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/degree-icon.png" class="iomg" alt=""><p class="pri_p">'+user_obja.qualification_name+'</p><span class="pri_span">Task Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/yearofpassing-icon.png" class="iomg" alt=""><p class="pri_p">'+currentobj_educational_records.year_of_passing+'</p><span class="pri_span">Year_of_passing</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/percentage.png"  class="iomg" alt=""><p class="pri_p">'+currentobj_educational_records.percentage+'</p><span class="pri_span">Percentage</span></div>'
$('#sda_newvericom').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.institute_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.institute_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
$('#lii_newvericom').append(liii);

  var oneemp = new Array(10);
  j = -1;
  for(a=0;a<employment_upload_array.length;a++){

    employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);
var empimg=employimg_obj.verification_type_id;
var empid=employimg_obj.verification_master_id;
//alert(empimg+"oneimg bsfore if");

if(empimg == qualification_id && empid == verification_user_id ){
//alert("if employimg_obj");
//alert(currentobj_educational_records.percentage+"if empimg after");
//alert(empid+"if empid after");
//alert(verification_user_id+"if verification_user_id after");
//var oneemp=employimg_obj.document;

j++;
oneemp[j]=employimg_obj.document;

if (j == 0 ){
  var one=oneemp[j];
  //alert(one+'oneempemmmmmplooooyy');
  $('.document_imag_inproone_veric_c').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+one+'" alt="Band"  class="rondell-item-image rondell-item-resizeable">');


}
if (j == 1 ){
  var oneo=oneemp[j];
 // alert(oneo+'two');
  $('.document_imag_inproone_verib_c').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band"  class="rondell-item-image rondell-item-resizeable">');

}
if (j == 2 ){
  var oneo=oneemp[j];
  //alert(oneo+'two');
  $('.document_imag_inproone_veria_c').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band"  class="rondell-item-image rondell-item-resizeable">');

}
if (j == 3 ){
  var oneo=oneemp[j];
  //alert(oneo+'two');
  $('.document_imag_inproone_verid_c').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band"  class="rondell-item-image rondell-item-resizeable">');

}
if (j == 4 ){
  var oneo=oneemp[j];
  //alert(oneo+'two');
  $('.document_imag_inproone_verie_c').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band"  class="rondell-item-image rondell-item-resizeable">');

}

if (j == 5 ){
  var oneo=oneemp[j];
  //alert(oneo+'two');
  $('.document_imag_inproone_verif_c').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band"  class="rondell-item-image rondell-item-resizeable">');

}

//alert(currentobj_educational_records.from);
//alert(currentobj_educational_records.to);
//alert(user_obja.qualification_name);



$('#from_verii').html(' <h1 class="sdah1">From-To</h1><p class="sdap">'+currentobj_educational_records.from+'</p><p class="sdap">'+currentobj_educational_records.to+'</p>');
$('#designation_verii').html('<h1 class="sdah1">Qualification</h1><p class="sdap">'+user_obja.qualification_name+'</p>');
$('#percentage_verii').html('<h1 class="sdah1">Percentage</h1><p class="sdap">'+currentobj_educational_records.percentage+'%</p>');
$('#year_of_passing_verii').html('<h1 class="sdah1">year_of_passing</h1><p class="sdap">'+currentobj_educational_records.year_of_passing+'</p>');
$('#institute_inproo_verii').text(currentobj_educational_records.institute_name);
$('#address_inproo_verii').text(currentobj_educational_records.address);
$('#pincode_inproo_verii').text(currentobj_educational_records.pincode);




$('#pincode_veri').text(currentobj_educational_records.pincode);



}

}

}

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
/*var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.qualification_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Tam</p></li>'
$('#lii_newvericom').append(liii);
*/
$('.proof').hide();

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.qualification_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
$('#lii_newvericom').append(liii);

  var oneaddress = new Array(10);
  j = -1;
  for(a=0;a<addressid_records_array.length;a++){
//alert("addressid for");
addressimg_obj = addressid_records_array[a];
// alert(addressimg_obj.document_name);
var oneimg=addressimg_obj.proof_type_id;
var oneid=addressimg_obj.user_id;
//alert(qualification_id+"oneimg");

if(oneimg == qualification_id && oneid == verification_user_id ){
//alert("if address proof");
//var oneproof=addressimg_obj.document_name;


j++;
oneaddress[j]=addressimg_obj.document_name;

if (j == 0 ){
  var one=oneaddress[j];
  //alert(one+'aaaaaaadddddressss');
  $('.document_imag_inproone_veric_c').append('<img src="http://115.118.113.83/watchguardlive/documents/addressid/'+one+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');


}
if (j == 1 ){
  var oneo=oneaddress[j];
  //alert(oneo+'two');
  $('.document_imag_inproone_verid_c').append('<img src="http://115.118.113.83/watchguardlive/documents/addressid/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}
if (j == 2 ){
  var oneo=oneaddress[j];
 // alert(oneo+'two');
  $('.document_imag_inproone_verib_c').append('<img src="http://115.118.113.83/watchguardlive/documents/addressid/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}

if (j == 3 ){
  var oneo=oneaddress[j];
 // alert(oneo+'two');
  $('.document_imag_inproone_veria_c').append('<img src="http://115.118.113.83/watchguardlive/documents/addressid/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}

if (j == 4 ){
  var oneo=oneaddress[j];
 // alert(oneo+'two');
  $('.document_imag_inproone_verie_c').append('<img src="http://115.118.113.83/watchguardlive/documents/addressid/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}
if (j == 5 ){
  var oneo=oneaddress[j];
  //alert(oneo+'two');
  $('.document_imag_inproone_verie_c').append('<img src="http://115.118.113.83/watchguardlive/documents/addressid/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}


$('#institute_inproo_veriii').text(user_obja.qualification_name);
//$('#address_inproo').text(currentobj_educational_records.address);
//  $('#pincode_inproo').text(currentobj_educational_records.pincode);


//alert(oneproof+"oneimg after if proof"+oneimg);
//alert(user_obja.name+'name name name oneimg after if proo');
$('#name_veri').text(user_obja.name);
$('#qualification_name_veri').text(user_obja.qualification_name);
// $('#address').text(currentobj_educational_records.address);
// $('#percent').text(currentobj_educational_records.percentage);
// $('#institute').text(currentobj_educational_records.institute_name);
//$('#degree').text(currentobj_educational_records.degree_name);
$('#location_veri').text(user_obja.city_name);
// $('#year').text(currentobj_educational_records.year_of_passing);

//$('.document_imag_veri').append('<img class="profile-thumbnail" src="http://115.118.113.83/watchguardlive/documents/addressid/'+oneproof+'" style="width:150px;height:150px">&nbsp');


//$('#pincode').text(currentobj_educational_records.pincode);



}

}


}

}






});









