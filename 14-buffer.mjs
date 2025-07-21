// buffer
// buffer objects are used to represent a fixed-length sequence of bytes.

const buffer = Buffer.from("Adi Adi Wahyudi");

console.info(buffer);
console.info(buffer.toString());

buffer.reverse();
console.info(buffer.toString());
