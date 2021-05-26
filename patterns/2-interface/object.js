// Display all the values of an in-memory object.
const explorableObject = {
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

for await (const key of explorableObject) {
  const value = await explorableObject.get(key);
  console.log(value);
}
