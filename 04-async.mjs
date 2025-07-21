// By default in esmodule, the top level is async function, so you can use await directly

function samplePromise() {
  return Promise.resolve("Adi");
}

const name = await samplePromise();
console.info(name);
