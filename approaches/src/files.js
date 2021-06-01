// Display all the file contents in a given folder.
import * as fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// Get a reference to the folder.
const moduleFolder = path.dirname(fileURLToPath(import.meta.url));
const filesFolder = path.resolve(moduleFolder, "../people");

// Read the list of files in that folder.
const files = await fs.readdir(filesFolder);

// Display the contents of each file in the console.
const buffers = await Promise.all(
  files.map((fileName) => {
    const filePath = path.join(filesFolder, fileName);
    return fs.readFile(filePath);
  })
);
for (const buffer of buffers) {
  console.log(buffer.toString());
}
