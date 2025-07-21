// commonjs module will work but not recommed, use esmodule
const os = require("os");
console.info(os.platform());
console.table(os.cpus());
