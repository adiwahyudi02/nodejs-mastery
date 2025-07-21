// The node:util module supports the needs of Node.js internal APIs. Many of the utilities are useful for application and module developers as well.
import util from "util";

const firstName = "Adi";
const lastName = "Wahyudi";

console.info(`Hello ${firstName} ${lastName}`);
console.info(util.format("Hello %s %s", firstName, lastName));

const person = {
  firstName: "Adi",
  lastName: "Wahyudi",
};

console.info(`Person : ${JSON.stringify(person)}`);
console.info(util.format("Person : %j", person));
