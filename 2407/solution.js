main();

function main() {
  const [n, m] = getInputs();
  console.log(solve(n, m));
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  const [n, m] = fs.readFileSync(filepath).toString().trim().split(" ");
  return [+n, +m];
}

function solve(n, m) {
  return combination(n, m);
}

function combination(n, m) {
  let pascal = Array(n + 1);

  for (let i = 0; i <= n; ++i) {
    pascal[i] = Array(i).fill(0);

    for (let j = 0; j <= i; ++j) {
      if (j === 0 || i === j) {
        pascal[i][j] = 1;
      } else {
        pascal[i][j] = BigInt(pascal[i - 1][j]) + BigInt(pascal[i - 1][j - 1]);
      }
    }
  }
  return pascal[n][m].toString();
}
