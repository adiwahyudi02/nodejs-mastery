// The node:zlib module provides compression functionality implemented using Gzip, Deflate/Inflate, Brotli, and Zstd.
import fs from "fs";
import zlib from "zlib";

const source = fs.readFileSync("20-zlib-compress.mjs");
const result = zlib.gzipSync(source);

fs.writeFileSync("20-zlib-compress.mjs.txt", result);
