// function walk(currentDirPath, callback) {
//     var fs = require('fs'),
//         path = require('path');
//     fs.readdir(currentDirPath, function (err, files) {
//         if (err) {
//             throw new Error(err);
//         }
//         files.forEach(function (name) {
//             var filePath = path.join(currentDirPath, name);
//             var stat = fs.statSync(filePath);
//             if (stat.isDirectory()) {
//                 callback(filePath, stat);
//             }
//         });
//     });
// }
//
// walk('../../', function(filePath, stat) {
//     console.log(filePath);
// });
//

var Finder = require('fs-finder');
var path = require('path');
let dirpath;
// 해당 디렉토리 설정
let baseDir = "C:/LP_Data/64/LP Tools/02. Index DB Builder/Input";

Finder.in(baseDir).findDirectories(function(directories) {
    for(var i in directories){
      dirpath= path.normalize(directories[i]);
      dirpath= path.basename(dirpath);
      if(dirpath.length==3 && dirpath==dirpath.toUpperCase()){  //대문자로 3글자인 디렉토리 추출
        console.log(dirpath);
      }
    }
});
