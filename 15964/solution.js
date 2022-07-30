main();
function main() {
  const [A, B] = getInputs();

  solve(A, B);
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const [A, B] = fs
    .readFileSync(filepath)
    .toString()
    .trim()
    .split(" ")
    .map((n) => Number(n));
  return [A, B];
}

function solve(A, B) {
  console.log((A + B) * (A - B));
}
