//
// Basic graph shape
//
// Use async functions as a lowest-common denominator.

graph = {
  // Return a generator for keys we want to make public.
  // Use a well-known JavaScript symbol for use with `for await` loops.
  async *[Symbol.asyncIterator]() {},

  // Return the value found by following the given keys.
  async get(...keys) {},

  // Optional: set the value at the given location in the graph.
  async set(...keys, value) {}
};
