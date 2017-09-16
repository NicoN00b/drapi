var apiKey = require('./../.env').apiKey;
import { drSearch } from './../js/dr.js';

$(document).ready(function() {
  $('#searchDr').submit(function(event) {
    event.preventDefault();
    $('.result').html("");
    findDoctors();
  })
});
