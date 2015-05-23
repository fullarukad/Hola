var fs=require('fs');
var path= require('path');


module.exports = function(dirname,ext,callback){

    fs.readdir(dirname, function (err, files){
        if(err)
            return callback(err);
            
        var ans=[];
        for (var i=0; i<files.length; i++){
            if(path.extname(files[i])=='.'+ext)
                ans.push(files[i]);
        }
        
        callback(null, ans);
    });
}
