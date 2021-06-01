import fetch from "node-fetch"; // Node doesn't have fetch yet.

// Get resources from the web site/service below.
const href = "https://explorablegraph.github.io/videos/approaches/site/";

// Ask the site for a list of resources it can provide.
const routesUrl = new URL(".keys.json", href);
const routesResponse = await fetch(routesUrl.href);
const routes = await routesResponse.json();

// For each route, get the corresponding resource.
const buffers = await Promise.all(
  routes.map(async (route) => {
    const pageUrl = new URL(route, href);
    const response = await fetch(pageUrl.href);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    return buffer;
  })
);

// Display all the resources.
for (const buffer of buffers) {
  console.log(buffer.toString());
}
