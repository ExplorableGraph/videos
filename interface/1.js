/**
 * Basic shape (interface) for an explorable graph
 *
 * This uses async functions as a lowest-common denominator.
 */

graph = {
  // Return a generator for keys we want to make public.
  // Use a JavaScript symbol for use with `for await` loops.
  async *[Symbol.asyncIterator]() {},

  // Return the value for a given key.
  async get(key) {},
};
