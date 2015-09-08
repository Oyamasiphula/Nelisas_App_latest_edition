var fs = require('fs');


 exports.getData = function(fileName){
       var linesInFiles = [];//list to store your stuff
  
       var fileContent = fs.readFileSync(fileName, "utf8");//read files in folder
       var lines = fileContent.split('\r').splice(1);//split to display files on a new line
           lines.forEach(function(line){
            linesInFiles.push(line);//push lines in the files to list you created
  });

     return linesInFiles;// return lines in files
}

  this.linesInFilesAsync = function(fileName, callback) {
    var linesInFiles = getData(fileName);
        callback(null, linesInFiles);
};
