function init() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const inputs = fs.readFileSync(filepath).toString().trim().split("\n");
  const case_cnt = inputs[0];
  inputs.shift();
  solve(case_cnt, inputs);
}

function solve(case_cnt, arr) {
  for (let i = 0; i < case_cnt; ++i) {
    const k = arr[i * 2];
    const n = arr[i * 2 + 1];
    console.log(recur(k, n));
  }
}

function recur(k, n) {
  if (k == 0) return n;
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += recur(k - 1, i);
    ++i;
  }
  return sum;
}

init();
