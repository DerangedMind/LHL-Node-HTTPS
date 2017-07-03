var https = require('https');

function getAndPrintHTML (options) {
  https.get(options, function(response) {
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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


getAndPrintHTML(requestOptions);