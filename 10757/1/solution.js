function main() {
  const [A, B] = getInputs().map((num) => BigInt(num));
  solve(A, B);
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const inputs = fs.readFileSync(filepath).toString().trim().split(" ");
  return inputs;
}

function solve(A, B) {
  console.log(A + B + "");
}

main();
