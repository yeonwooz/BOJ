main();

function main() {
  const [A, B] = getInputs();
  solve(A, B);
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  const [A, B] = fs.readFileSync(filepath).toString().trim().split("\n");

  return [A, B];
}

function solve(A, B) {
  A = BigInt(A);
  B = BigInt(B);
  console.log((A + B).toString());
  console.log((A - B).toString());
  console.log((A * B).toString());
}
