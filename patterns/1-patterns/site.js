import fetch from "node-fetch"; // Node doesn't have fetch yet.

// Display all the resources results at a given net location.
// E.g. for site.com/a, site.com/b, site.com/c, get all those resources.
const siteUrl =
  "https://explorablegraph.github.io/hello/src/intro2/graphs/site/";
const routesUrl = new URL(".keys.json", siteUrl);
const routesResponse = await fetch(routesUrl.href);
const routes = await routesResponse.json();
for (const route of routes) {
  const pageUrl = new URL(route, siteUrl);
  const resultResponse = await fetch(pageUrl.href);
  const resultText = await resultResponse.text();
  console.log(resultText);
}
