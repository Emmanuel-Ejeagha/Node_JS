// Callbacks is used in handlind async functions
const fs = require("fs");

function person(name, callbackFn) {
  console.log(`Hello ${name}`);
  callbackFn();
}

function address() {
  console.log("Nigeria");
}

person("Emmanuel Ejeagha", address);

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Errorreading file", err);
    return;
  }
  console.log(data);
});
