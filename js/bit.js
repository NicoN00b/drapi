getBitAPI (usd, gbp, eur){
  $.ajax({
    url: `https://api.coindesk.com/v1/bpi/currentprice.json`
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {

    },
    error: function() {

    }
  });
}

var bitTicker = {
  
}
