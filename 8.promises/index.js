function delayFn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
console.log("Promise lecture starts");
delayFn(2000).then(() => console.log("After 2 seconds promise resolve"));
console.log("end");

function divideFn(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 == 0) {
      reject("Cannot perform division by zero");
    } else {
      resolve(num1 / num2);
    }
  });
}

divideFn(10, 0)
  .then((result) => console.log(result, "res"))
  .catch((error) => console.log(error, "err"));
