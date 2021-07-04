import {
  builtins,
  Compose,
  ExplorableFiles,
  ModulesDefaultExportMixin,
} from "@explorablegraph/explorable";
import path from "path";
import process from "process";

function CommandsMixin(Base) {
  return class Commands extends Base {
    async *[Symbol.asyncIterator]() {
      for await (const key of super[Symbol.asyncIterator]()) {
        if (key.endsWith(".js")) {
          yield path.basename(key, ".js");
        }
      }
    }

    async get(...keys) {
      // Try keys as they are.
      // const value = await super.get(...keys);
      // if (value !== undefined) {
      //   return value;
      // }
      const lastKey = keys.pop();
      const commandKey = `${lastKey}.js`;
      keys.push(commandKey);
      const value = await super.get(...keys);
      return value;
    }
  };
}

const commands = new (CommandsMixin(
  ModulesDefaultExportMixin(ExplorableFiles)
))(process.cwd());

export default new Compose(commands, builtins);
