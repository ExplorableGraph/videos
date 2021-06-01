import fetch from "node-fetch"; // Node doesn't have fetch yet.

// Display all the resource results from a given web site location.
const href = "https://explorablegraph.github.io/videos/approaches/site/";

// Ask the site for a list of keys/routes at that point.
const routesUrl = new URL(".keys.json", href);
const routesResponse = await fetch(routesUrl.href);
const routes = await routesResponse.json();

// For each route, get that resource and display it.
const buffers = await Promise.all(
  routes.map(async (route) => {
    const pageUrl = new URL(route, href);
    const response = await fetch(pageUrl.href);
    const arrayBuffer = await response.arrayBuffer();
    return Buffer.from(arrayBuffer);
  })
);
for (const buffer of buffers) {
  console.log(buffer.toString());
}
