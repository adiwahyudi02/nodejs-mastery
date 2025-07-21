// The node:console module provides a simple debugging console that is similar to the JavaScript console mechanism provided by web browsers.
import { Console } from "console";
import fs from "fs";

const file = fs.createWriteStream("21-console-dist.log");

const log = new Console({
  stdout: file,
  stderr: file,
});

log.info("Hello World");
log.error("Hello World");

const person = {
  firstName: "Adi",
  lastName: "wahyudi",
};

log.table(person);
