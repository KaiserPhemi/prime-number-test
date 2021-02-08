// libraries
const readLine = require("readline");
const numChecker = require("./src/numChecker.js");

// io interface
const rlStream = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("============================================");
rlStream.question("Enter a number to check if it's Prime:  ", (num) => {
  console.log(numChecker(Number(num)));
  rlStream.close();
});
rlStream.on("close", () => {
  console.log("\nThank you. BYE!!!!");
  console.log("============================================");
  process.exit(0);
});
