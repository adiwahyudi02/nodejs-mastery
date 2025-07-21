// stream
// A stream is an abstract interface for working with streaming data in Node.js.

import fs from "fs";

const writer = fs.createWriteStream("15-target.log");

writer.write("Adi\n");
writer.write("Kurniawan\n");
writer.write("wahyudi\n");
writer.end();

const reader = fs.createReadStream("15-target.log");
reader.addListener("data", (data) => {
  console.info(data.toString());
});
