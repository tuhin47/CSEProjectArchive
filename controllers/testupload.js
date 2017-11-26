var path = require('path'),
  fs = require('fs');
// ..

exports.addproject = function(req, res, next) {
  //var tempPath = req.files.file.path;
    var targetPath = path.resolve('../uploads/image.png');
  // if (path.extname(req.files.file.name).toLowerCase() === '.png') {
  //   fs.rename(tempPath, targetPath, function(err) {
  //     if (err) throw err;
  //     console.log("Upload completed!");
  //   });
  // } else {
  //   fs.unlink(tempPath, function() {
  //     if (err) throw err;
  //     console.error("Only .png files are allowed!");
  //   });
  // }

  console.log('ttttttttttttaaaaaaaaaaaaaaaaaaaaaaaaadddddddddddddda');
  // ...
};
