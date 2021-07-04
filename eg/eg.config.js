import { builtins, CommandModules, Compose } from "@explorablegraph/explorable";
import process from "process";

// Add all commands in the current folder to the active eg scope. E.g., if the
// current folder contains "foo.js", then eg will gain a `foo` command.
export default new Compose(new CommandModules(process.cwd()), builtins);
