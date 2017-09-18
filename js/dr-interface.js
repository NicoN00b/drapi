var drSearchModule = require('./../js/dr.js').drSearchModule;
var apiKey = require('./../.env').apiKey;

function dataResult(response) {
  // let data = response.data;

  response.data.forEach(function(doctor){
    let first_name;
    let last_name;
    let visit_address;
    let website;
    let accepts_new_patients;


    return $('.result').append(`<li>$.{data.profile.first_name}</li> <li>${data.profile.last_name}</li> <li>${data.visit_address}</li> <li>${data.website}</li> <li>${data.accepts_new_patients}</li>`);
  });
}

$(function(){
  $('#searchDr').submit(function(event) {
    event.preventDefault();
    $('.result').show();
    let name = $('#byDr').val();
    let search = DrSearchModule.findDoctors(name, data);

  });
});

// $('.result').html(`<li>$.{data.profile.first_name}</li> <li>${data.profile.last_name}</li> <li>${data.visit_address}</li> <li>${data.website}</li> <li>${data.accepts_new_patients}</li>`);
