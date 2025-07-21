// this will work because we use .mjs extension
// we recomend to always use esmodule
import os from "os";

console.info(os.platform());
console.table(os.cpus());
