import fetch from "node-fetch"; // Node doesn't have fetch yet.

// Display all the resource results from a given web service.
const href = "https://explorablegraph.github.io/videos/patterns/site/";
const routesUrl = new URL(".keys.json", href);
const routesResponse = await fetch(routesUrl.href);
const routes = await routesResponse.json();
for (const route of routes) {
  const pageUrl = new URL(route, href);
  const response = await fetch(pageUrl.href);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  console.log(buffer.toString());
}
