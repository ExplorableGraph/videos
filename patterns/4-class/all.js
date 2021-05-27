import { ExplorableObject } from "@explorablegraph/explorable";
import files from "./files.js";
import fn from "./function.js"; // Can't import this as reserved word `function`
import object from "./object.js";
import site from "./site.js";

export default new ExplorableObject({
  object,
  files,
  function: fn,
  site,
});
