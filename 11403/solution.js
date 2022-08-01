main();

function main() {
  const [N, arr] = getInputs();
  solve(N, arr);
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  let [N, ...arr] = fs.readFileSync(filepath).toString().trim().split("\n");
  N = Number(N);
  arr = arr.map((row) => row.split(" ").map((n) => Number(n)));
  return [N, arr];
}

function solve(N, arr) {
  for (let k = 0; k < N; ++k) {
    for (let i = 0; i < N; ++i) {
      for (let j = 0; j < N; ++j) {
        if (arr[i][k] === 1 && arr[k][j] === 1) arr[i][j] = 1;
      }
    }
  }

  for (let i = 0; i < N; ++i) {
    console.log(arr[i].join(" "));
  }
}
