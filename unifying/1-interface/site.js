import fetch from "node-fetch"; // Node doesn't have fetch yet.

// Display all the (route, resource) results at a given net location.
// E.g. for site.com/a, site.com/b, site.com/c, get all those resources.
const explorableSite = {
  href: "https://explorablegraph.github.io/videos/approaches/site/",

  async *[Symbol.asyncIterator]() {
    const url = new URL(".keys.json", this.href);
    const response = await fetch(url.href);
    const keys = await response.json();
    yield* keys;
  },

  async get(key) {
    const url = new URL(key, this.href);
    const response = await fetch(url.href);
    const arrayBuffer = await response.arrayBuffer();
    return Buffer.from(arrayBuffer);
  },
};

for await (const key of explorableSite) {
  const value = await explorableSite.get(key);
  console.log(value.toString());
}
