// readline
// the readline module provides an interface for reading data from a terminal or input

import readline from "readline";
import process from "process";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("Siapa nama Anda? ", (name) => {
  console.info(`Halo ${name}`);
  input.close();
});
