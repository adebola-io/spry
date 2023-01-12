const { readdir, existsSync, unlinkSync } = require("fs");
const { terminal } = require("./utils");

terminal.yellow("Deleting minimized product images...");

const itemsFolder = "assets/images/items";

readdir(itemsFolder, (err, folders) => {
   if (err) throw err;
   folders.forEach((folder) => {
      readdir(`${itemsFolder}/${folder}/`, (err, files) => {
         if (err) throw err;
         files.forEach((file) => {
            if (file.endsWith(".min.png")) {
               const compressedPath = `${itemsFolder}/${folder}/${file}`;
               unlinkSync(compressedPath);
            }
         });
      });
   });
});

terminal.green("Minimized images cleaned.");
