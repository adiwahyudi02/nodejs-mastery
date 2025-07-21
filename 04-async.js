// by default in .js file, the top level by default is async

function samplePromise() {
  return Promise.resolve("Adi");
}

// this will return error
// const name = await samplePromise();
// console.info(name);

// to run asyncrously, we need create new function to run the async function or change the file into module file
async function run() {
  const name = await samplePromise();
  console.info(name);
}

run();
