import {DrSearchModule as drSearch} from './../js/dr.js';

// let drSearchModule = new DrSearchModule();
let doctorResults = function(response) {

  $('.result').empty();

  response.data.forEach(function(doctor){
    let first_name = doctor.profile.first_name;
    let last_name = doctor.profile.last_name;
    let image = `<img src="${doctor.profile.image_url}" alt="A picture of the Dr.">`;
    let visit_address = doctor.practices[0].visit_address.street + ". <br>" + doctor.practices[0].visit_address.city + ", " + doctor.practices[0].visit_address.state + " " + doctor.practices[0].visit_address.zip;
    let website;
    if ( doctor.practices[0].website === undefined) {
      website = "Unavailable";
    } else {
      website = `<a href="${doctor.practices[0].website}">Go</a>`;
    }

    let accepts_new_patients;

    if (doctor.practices[0].accepts_new_patients === true){
      accepts_new_patients = "Yes";
    } else {
      accepts_new_patients = "Not at this time";
    }
    let phone;
    if (doctor.practices[0].phones[0].type === "landline"){
      phone = doctor.practices[0].phones[0].number;
    } else if (doctor.practices[0].phones[1].type === "landline") {
      phone = doctor.practices[0].phones[1].number;
    }

    $('.result').prepend(`
      <div class="well
        <div class="row">
          <div class="col">
            ${image}
          </div>
          <div class="col">
            <ul>
              <li>Name: ${first_name} ${last_name}</li>
              <li>Address: ${visit_address}</li>
              <li>Website: ${website}</li>
              <li>Phone Number: ${phone}</li>
              <li>Accepting New Patients: ${accepts_new_patients}</li>
            </ul>
          </div>
        </div>
      </div>`);
  });
};


  $(function(){
    $('#searchDr').submit(function(event) {
      event.preventDefault();
      $('.result').show();
      let name = $('#byDr').val();
      drSearch.findDoctors(name, doctorResults);
    });
    $('#searchSymp').submit(function(event) {
      event.preventDefault();
      $('.result').show();
      let query = $('#condition').val();
      drSearch.searchSymptoms(query, doctorResults);
    });
  });
