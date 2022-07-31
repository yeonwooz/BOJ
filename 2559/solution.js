main();

function main() {
  const [N, K, arr] = getInputs();
  solve(N, K, arr);
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  let [meta, ...arr] = fs.readFileSync(filepath).toString().trim().split("\n");

  const [N, K] = meta.split(" ").map((n) => Number(n));
  arr = arr[0].split(" ").map((n) => Number(n));
  return [N, K, arr];
}

function solve(N, K, arr) {
  let tmp = arrSum(arr, K);
  let result = tmp;

  for (let i = K; i < N; ++i) {
    tmp += arr[i] - arr[i - K];
    if (result < tmp) result = tmp;
  }
  console.log(result);
}

function arrSum(arr, K) {
  let sum = 0;
  for (let i = 0; i < K; ++i) {
    sum += arr[i];
  }
  return sum;
}
