var apikey = require('./../.env').apiKey;

let DrSearchModule = {

  findDoctors: function(name, data){
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?location=45.5202,-12.6742,100&skip=2&limit=10&user_key+${apiKey}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: (response) => {
        if(response.data.length != 0) {
          data(response);
        } else {
          $('.result').html("We're Sorry, your search returned no results");
        }
      },
      error: function() {
        $('.result').html("There was an error processing your request. Please try again.");
      }
    });
  }
};

exports.drSearchModule = DrSearchModule;
