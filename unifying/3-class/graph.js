export default {
  async *[Symbol.asyncIterator]() {
    yield* ["Alice", "Bob", "Carol"];
  },

  async get(key) {
    return `Hello, ${key}.`;
  },
};
