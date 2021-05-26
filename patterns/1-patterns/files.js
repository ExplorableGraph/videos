// Display all the file contents in a given folder.
import * as fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const moduleFolder = path.dirname(fileURLToPath(import.meta.url));
const filesFolder = path.resolve(moduleFolder, "../files");
const files = await fs.readdir(filesFolder);

for (const fileName of files) {
  const filePath = path.join(filesFolder, fileName);
  const buffer = await fs.readFile(filePath);
  const text = String(buffer);
  console.log(text);
}
