main();

function main() {
  const [n, k] = getInputs();
  solve(n, k);
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  const [n, k] = fs.readFileSync(filepath).toString().trim().split(" ");
  return [+n, +k];
}

function solve(n, k) {
  let pascal = Array(n);

  for (let i = 0; i < n; ++i) {
    pascal[i] = Array(i).fill(0);

    for (let j = 0; j <= i; ++j) {
      if (j === 0 || i === j) {
        pascal[i][j] = 1;
      } else {
        pascal[i][j] = pascal[i - 1][j] + pascal[i - 1][j - 1];
      }
    }
  }
  console.log(pascal[n-1][k-1]);
}
