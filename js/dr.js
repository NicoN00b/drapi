var apikey = require('./../.env').apiKey;

let DrSearchModule = function(){
};
  DrSearchModule.prototype.findDoctors = function(name, dataResult){
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?location=45.5202,-12.6742,100&skip=2&limit=10&user_key+${apiKey}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: (response) => {
        dataResult(response);


      },
      error: function() {
        $('#errors').html("There was an error processing your request. Please try again.");
      }
    });
  };

exports.drSearchModule = DrSearchModule;
