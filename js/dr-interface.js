var drSearchModule = require('./../js/dr.js').drSearchModule;
var apiKey = require('./../.env').apiKey;

function doctorResults(response) {
  // let data = response.data;

  response.data.forEach(function(doctor){
    let first_name = doctor.profile.first_name;
    let last_name = doctor.profile.last_name;
    let visit_address = doctor.practices[0].visit_address.street + " " + doctor.practices[0].visit_address.city + ", " + doctor.practices[0].visit_address.state + " " + doctor.practices[0].visit_address.zip;
    let website = doctor.practices[0].website;
    let accepts_new_patients;

    if (doctor.practices[0].accepts_new_patients === true){
      accepts_new_patients = "Yes";
    } else {
      accepts_new_patients = "Not at this time";
    }

    $('.result').append(`<li>${first_name} + " " + ${last_name}</li> <li>${visit_address}</li> <li>${website}</li> <li>${accepts_new_patients}</li>`);
  });
}

$(function(){
  $('#searchDr').submit(function(event) {
    event.preventDefault();
    $('.result').show();
    let name = $('#byDr').val();
    let search = DrSearchModule.findDoctors(name, doctorResults);

  });
});
