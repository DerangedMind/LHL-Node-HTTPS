var https = require('https')

function getHTML (options, callback) {

  https.get(options, function(response) {
    response.setEncoding('utf8');
    var dataString = "";
    response.on('data', function (data) {
        dataString += data;    
    });
    response.on('end', function (data) {
        callback(dataString);
    });
  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);