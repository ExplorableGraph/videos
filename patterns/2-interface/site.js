import fetch from "node-fetch"; // Node doesn't have fetch yet.

// Display all the (route, resource) results at a given net location.
// E.g. for site.com/a, site.com/b, site.com/c, get all those resources.
// import fetch from "node-fetch"; // Node doesn't have fetch yet.
const explorableSite = {
  url: "https://explorablegraph.github.io/hello/src/intro2/graphs/site/",

  async *[Symbol.asyncIterator]() {
    const url = new URL(".keys.json", this.url);
    const response = await fetch(url.href);
    const keys = await response.json();
    yield* keys;
  },

  async get(key) {
    const url = new URL(key, this.url);
    const response = await fetch(url.href);
    const text = await response.text();
    return text;
  },
};

for await (const key of explorableSite) {
  const value = await explorableSite.get(key);
  console.log(value);
}
