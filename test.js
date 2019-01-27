// console.log('Hello World');

// console.log(2+2);

var filesYo = require('fs');
var https = require('https');

filesYo.writeFile(__dirname + "/index.html","<h1>HTML rocks</h1>");

var picURL = "https://picsum.photos/200";
var picFile = filesYo.createWriteStream(__dirname + "/node-pic.jpg");
var request = https.get(picURL, function(response){
   response.pipe(picFile);
});