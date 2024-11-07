function delayFn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function delayedGreet(name) {
  await delayFn(2000);
  console.log(name);
}

delayedGreet("Emmanuel");

async function division(num1, num2) {
  try {
    if (num2 === 0) throw new Error("Cannot divide by 0");
    return num1 / num2;
  } catch (error) {
    console.error("error:", error);
  }
}

async function mainFn() {
  console.log(await division(10, 2));
  console.log(await division(10, 0));
}

mainFn();
