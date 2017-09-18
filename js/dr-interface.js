var apiKey = require('./../.env').apiKey;
var drSearchModule = require('./../js/dr.js').drSearchModule;

function dataResult(response) {
  // let data = response.data;

  response.data.forEach(function(doctor){



    return $('.result').append(`<li>$.{data.profile.first_name}</li> <li>${data.profile.last_name}</li> <li>${data.visit_address}</li> <li>${data.website}</li> <li>${data.accepts_new_patients}</li>`);
  });
}

$(function(){
  $('#searchDr').submit(function(event) {
    event.preventDefault();
    $('.result').show();
    let name = $('#byDr').val();
    let result = findDoctors(name, dataResult);

  });
});

// $('.result').html(`<li>$.{data.profile.first_name}</li> <li>${data.profile.last_name}</li> <li>${data.visit_address}</li> <li>${data.website}</li> <li>${data.accepts_new_patients}</li>`);
