import * as fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const moduleFolder = path.dirname(fileURLToPath(import.meta.url));
const filesFolder = path.resolve(moduleFolder, "../people");

export default {
  dirname: filesFolder,

  async *[Symbol.asyncIterator]() {
    yield* await fs.readdir(this.dirname);
  },

  async get(key) {
    return await fs.readFile(path.join(this.dirname, key));
  },
};
