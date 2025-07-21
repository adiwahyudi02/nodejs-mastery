// this will be error because to load an ES module, set "type": "module" in the package.json or use the .mjs extension
// you can achive the same thing with require (commonjs)

import os from "os";
console.info(os.platform());
console.table(os.cpus());
