const fs = require('fs');
fs.writeFile('file.txt','Hello World 2', function (err, data){
    if(err) throw err;
    console.log(data);
});