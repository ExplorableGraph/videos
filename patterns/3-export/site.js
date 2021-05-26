import fetch from "node-fetch"; // Node doesn't have fetch yet.

export default {
  url: "https://explorablegraph.github.io/videos/patterns/service/",

  async *[Symbol.asyncIterator]() {
    const url = new URL(".keys.json", this.url);
    const response = await fetch(url.href);
    const keys = await response.json();
    yield* keys;
  },

  async get(key) {
    const url = new URL(key, this.url);
    const response = await fetch(url.href);
    const arrayBuffer = await response.arrayBuffer();
    return Buffer.from(arrayBuffer);
  },
};
