main();

function main() {
  const X = getInputs();
  solve(X);
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const X = fs.readFileSync(filepath).toString().trim();
  return +X;
}

function solve(X) {
  let length = 64;
  let cnt = 0;
  while (X > 0) {
    if (length > X) length /= 2;
    else {
      ++cnt;
      X -= length;
    }
  }
  console.log(cnt);
}
