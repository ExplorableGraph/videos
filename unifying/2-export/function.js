export default {
  fn(arg) {
    return `Hello, ${arg}.`;
  },

  keys: ["Alice", "Bob", "Carol"],

  async *[Symbol.asyncIterator]() {
    yield* this.keys;
  },

  async get(key) {
    return this.fn(key);
  },
};
