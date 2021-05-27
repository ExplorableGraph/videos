import { ExplorableFiles } from "@explorablegraph/explorable";
import path from "path";
import { fileURLToPath } from "url";

const moduleFolder = path.dirname(fileURLToPath(import.meta.url));
const filesFolder = path.resolve(moduleFolder, "../files");

export default new ExplorableFiles(filesFolder);
