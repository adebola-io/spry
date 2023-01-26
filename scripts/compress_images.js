const { readdir, readdirSync, appendFile, existsSync } = require("fs");
const sharp = require("sharp");
const { terminal } = require("./utils");

const itemsFolder = "assets/images/items";

console.log("Compressing Product Images...");

/**
 *
 * @param {Buffer} imageBuffer
 * @returns {Promise<Buffer>}
 */
async function compress(imageBuffer) {
   return sharp(imageBuffer)
      .metadata()
      .then((metadata) => {
         const [width, height] = [metadata.width, metadata.height].map((dim) =>
            parseInt(dim / 3.8)
         );
         return sharp(imageBuffer).resize(width, height).toBuffer();
      })
      .catch((err) => {
         console.log(err);
      });
}

readdir(itemsFolder, (err, folders) => {
   folders.forEach((folder) => {
      const files = readdirSync(`${itemsFolder}/${folder}/`);
      files.forEach((file) => {
         const fileLocation = `${itemsFolder}/${folder}/${file}`,
            filename = file.split(".")[0],
            compressedName = filename + ".min.png",
            compressedPath = `${itemsFolder}/${folder}/${compressedName}`;
         if (!existsSync(compressedPath))
            compress(fileLocation).then((compressedBuffer) => {
               appendFile(compressedPath, compressedBuffer, () => {
                  terminal.green(`Compressed ${fileLocation} successfully.`);
               });
            });
      });
   });
});
