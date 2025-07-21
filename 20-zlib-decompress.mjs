// The node:zlib module provides compression functionality implemented using Gzip, Deflate/Inflate, Brotli, and Zstd.
import fs from "fs";
import zlib from "zlib";

const source = fs.readFileSync("20-zlib-compress.mjs.txt");
console.info(source.toString());

const result = zlib.unzipSync(source);
console.info(result.toString());
