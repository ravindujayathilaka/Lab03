const fs = require('fs');
fs.readFile('file.txt', 'útf8', function(err, data){
    if(err)
        throw err;
    console.log(data);
})