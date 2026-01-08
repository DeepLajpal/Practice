function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("DATA");
    }, 2000);
  });
}

async function test() {
  console.log("Inside async start");

  const data = await getData(); // pauses THIS function
  console.log(data);

  console.log("Inside async end");
}

console.log("Program start");

test();

console.log("Program end");
