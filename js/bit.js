$(function (){

  $.ajax({
    url: `https://api.coindesk.com/v1/bpi/currentprice.json`,
    type: 'GET',
    success: function(dataSet) {
      let data = $.parseJSON(dataSet);
      $('#bpi').append(`<li>${data.bpi.USD.code} ${data.bpi.USD.symbol} ${data.bpi.USD.rate}</li>`);
      $('#bpi').append(`<li>${data.bpi.GBP.code} ${data.bpi.GBP.symbol} ${data.bpi.GBP.rate}</li>`);
      $('#bpi').append(`<li>${data.bpi.EUR.code} ${data.bpi.EUR.symbol} ${data.bpi.EUR.rate}</li>`);
    },
    error: function(bpi) {
      alert('error loading coindesk');
    }
  });


});
