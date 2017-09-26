import {drSearchModule as drSearch} from './../js/dr.js';

// let drSearchModule = new DrSearchModule();
let doctorResults = function(response) {

  response.data.forEach(function(doctor){
    let first_name = doctor.profile.first_name;
    let last_name = doctor.profile.last_name;
    let visit_address = doctor.practices[0].visit_address.street + " " + doctor.practices[0].visit_address.city + ", " + doctor.practices[0].visit_address.state + " " + doctor.practices[0].visit_address.zip;
    let website;

    if (doctor.practices.website === undefined) {
      website = "Unavailable";
    } else {
      return doctor.practices.website;
    }

    let accepts_new_patients;

    if (doctor.practices[0].accepts_new_patients === true){
      accepts_new_patients = "Yes";
    } else {
      accepts_new_patients = "Not at this time";
    }

    $('.result').prepend(`
      <div class="well">
        <ul>
          <li>Name: ${first_name} ${last_name}</li>
          <li>Address: ${visit_address}</li>
          <li>Website: ${website}</li>
          <li>Accepting New Patients: ${accepts_new_patients}</li>
        </ul>
      </div>`
    );
  });
};

  $(function(){
    $('#searchDr').submit(function(event) {
      event.preventDefault();
      $('.result').show();
      let name = $('#byDr').val();
      drSearch.findDoctors(name, doctorResults);

    });
  });

  $(function(){
    $('#searchDr').submit(function(event) {
      event.preventDefault();
      $('.result').show();
      let query = $('#conditon').val();
      drSearch.searchSymptoms(query, doctorResults);

    });
  });
