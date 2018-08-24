const merge = require("easy-pdf-merge");
const fs = require("fs");
const path = require("path");

const dir = process.argv.slice(2)[0];
const srcFileNames = fs.readdirSync(dir);
srcFileNames.forEach(srcFileName => {
  const extension = path.extname(srcFileName);
  if (extension.toLowerCase() === ".pdf") {
    const srcFilePath = path.format({
      dir,
      name: srcFileName
    });
    console.log(`Processing the "${srcFilePath}" file...`);
    const srcFilePaths = [srcFilePath, srcFilePath, srcFilePath, srcFilePath];
    const destFileName = `${path.basename(srcFileName, extension)}_processed`;
    const destFilePath = path.format({
      dir,
      name: destFileName,
      ext: extension
    });
    merge(srcFilePaths, destFilePath, error => {
      if (error) {
        return console.log(error);
      }
      console.log("Success");
    });
  }
});
