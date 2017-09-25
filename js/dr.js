let apiKey = require('./../.env').apiKey;

export let drSearchModule = {

  findDoctors: function(name, doctorResults) {
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or-portland&skip=2&limit=10&user_key=${apiKey}`,
      type: "GET",
      data: {
        format: "json"
      },
      success: (response) => {
        if (response.data.length != 0) {
          doctorResults(response);
          console.log(response);
        } else {
          $('.result').html("We're Sorry, your search returned no results");
        }
      },
      error: function() {
        $('.result').html("There was an error processing your request. Please try again.");
      }
    });
  },

  searchSymptoms: function(query, doctorResults) {
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&location=or-portland&skip=2&limit=10&user_key=${apiKey}`,
      type: "GET",
      data: {
        format: "json"
      },
      success: (response) => {
        if (response.data.length != 0) {
          searchSymptoms(response);
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
