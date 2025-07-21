// url
// the url module provides utilities for URL resolution and parsing.
import { URL } from "url";

const pzn = new URL("https://adiwahyudi.vercel.app/?page=skills");

pzn.host = "www.wahyudi.com";
pzn.searchParams.append("status", "premium");

console.info(pzn.toString());
console.info(pzn.href);
console.info(pzn.protocol);
console.info(pzn.host);
console.info(pzn.pathname);
console.info(pzn.searchParams);
