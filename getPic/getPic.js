var request = require('request');
var fs = require('fs');
var downloadPercent = 0;

request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
       .on('error', function (err) {                                   // Note 2
         throw err; 
       })
       .on('response', function (response) {                           // Note 3
         console.log('Response Status Code: ', response.statusCode);
         console.log('Response Status Message: ', response.statusMessage);
         console.log('Content Headers: ', response.headers['content-type']);
         console.log('Download started...');
       })
       .pipe(fs.createWriteStream('./future.jpg'))
       .on('finish', function (response) {
         console.log("Download complete!");
       });               // Note 4
