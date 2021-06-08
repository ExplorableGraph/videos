//
// Basic graph shape
//
// Use async functions as a lowest-common denominator.

graph = {
  // Return a generator for keys we want to make public.
  // Use a well-known JavaScript symbol for use with `for await` loops.
  async *[Symbol.asyncIterator]() {},

  // Return the value for a given key.
  async get(key) {},
};
