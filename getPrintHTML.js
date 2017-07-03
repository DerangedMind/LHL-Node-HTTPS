function getAndPrintHTML () {
  var https = require('https');
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };


  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');
    var dataString = "";
    response.on('data', function (data) {
        dataString += data;    
    });
    response.on('end', function (data) {
        console.log(dataString)
    });
    
  });

}

getAndPrintHTML();