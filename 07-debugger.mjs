// debugger
// to run in debug mode we have to run with "node inspect filename"
// you can watch the variable use watch('variable_name')
// debugger commands
// continue = c, next = n, step in = s, step out = o, pause = p

function sayHello(name) {
  debugger;
  return `Hello ${name}`;
}

const name = "Adi";
debugger;
console.info(sayHello(name));
