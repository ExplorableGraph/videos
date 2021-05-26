#!/usr/bin/env node

import path from "path";
import process from "process";
import { fileURLToPath } from "url";

const [node, display, fileName] = process.argv;
const thisFolder = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.resolve(thisFolder, fileName);
const module = await import(filePath);
const graph = module.default;

for await (const key of graph) {
  const value = await graph.get(key);
  console.log(value);
}
