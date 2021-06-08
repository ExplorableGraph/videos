//
// Basic graph shape
//
// Use async functions as a lowest-common denominator.

graph = {
  // Return a generator for keys we want to make public.
  async *keys() {},

  // Return the value for a given key.
  async get(key) {},
};
