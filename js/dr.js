var apikey = require('./../.env').apiKey;

export let drSearch = {
  findDoctors: function request(){
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?location=45.5202,-12.6742,100&skip=2&limit=10&user_key= + apiKey`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: (response) => {
        let data = $.parseJSON(response);
        $('#result').html(`<li>${data.profile.first_name}</li> <li>${data.profile.last_name}</li> <li>${data.visit_address}</li> <li>${data.website}</li> <li>${data.accepts_new_patients}</li>`);
      },
      error: function() {
        $('#errors').html("There was an error processing your request. Please try again.")
      }
    });
  }
};
