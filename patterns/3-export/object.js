// Export an explorable in-memory object.
export default {
  obj: {
    Alice: "Hello, Alice.",
    Bob: "Hello, Bob.",
    Carol: "Hello, Carol.",
  },

  async *[Symbol.asyncIterator]() {
    yield* Object.keys(this.obj);
  },

  async get(key) {
    return this.obj[key];
  },
};
