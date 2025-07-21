// file system
// the fs module provides a way to interact with the file system on a computer.

// note: always tried to use promises (non-blocking)
import fs from "fs/promises";

const buffer = await fs.readFile("06-file-system.mjs");

console.info(buffer.toString());

await fs.writeFile("06-file-system-temp.txt", "Hello NodeJS");
