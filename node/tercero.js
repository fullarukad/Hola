var fs = require('fs');

var file= fs.readFileSync(process.argv[2]);

var texto= file.toString();
var arr= texto.split('\n');

console.log(arr.length-1);
