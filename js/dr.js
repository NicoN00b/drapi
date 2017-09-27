let apiKey = require('./../.env').apiKey;

export let DrSearchModule = {
  constructor() {},
  findDoctors: function(name, doctorResults) {
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or-portland&user_key=${apiKey}`,
      type: "GET",
      data: {
        format: "json"
      },
      success: (response) => {
        if (response.data.length != 0) {
           return doctorResults(response);
        } else {
          return "We're Sorry, your search returned no results";
        }
      },
      error: function() {
        $('.result').html("There was an error processing your request. Please try again.");
      }
    });
  },

  searchSymptoms: function(query, doctorResults) {
    console.log(doctorResults);
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&location=or-portland&user_key=${apiKey}`,
      type: "GET",
      data: {
        format: "json"
      },
      success: (response) => {
        console.log(response);
        if (response.data.length != 0) {
          return doctorResults(response);
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
