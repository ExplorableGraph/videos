import { ExplorableFunction } from "@explorablegraph/explorable";

export default new ExplorableFunction(
  (key) => `Hello, ${key}.`,
  ["Alice", "Bob", "Carol"]
);
