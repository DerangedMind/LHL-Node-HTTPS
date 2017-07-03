var https = require('https');

function getHTML (options, callback) {
  https.get(options, function(response) {
    response.setEncoding('utf8');
    var dataString = "";
    response.on('data', function (data) {
        dataString += data;    
    });
    response.on('end', function (data) {
        callback(dataString)
    });
  });
};

function printHTML (html) {
  console.log(html);
}

module.exports =  getHTML;