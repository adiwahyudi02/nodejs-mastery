// path module
// The path module provides utilities for working with file and directory paths.

import path from "path";

const file = "/Users/wahyudi/contoh.txt";

console.info(path.dirname(file));
console.info(path.basename(file));
console.info(path.extname(file));
