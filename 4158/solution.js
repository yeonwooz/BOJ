main();

function main() {
  const inputs = getInputs();
  let idx = 0;
  while (idx < inputs.length) {
    let meta = inputs[idx].split(" ");
    const N = +meta[0];
    const M = +meta[1];
    let arr = inputs.slice(idx + 1, idx + 1 + N + M);
    let cnt = solve(N, M, arr);
    console.log(cnt);
    idx += N + M + 1;
  }
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  let inputs = fs.readFileSync(filepath).toString().trim().split("\n");
  inputs.pop();
  return inputs;
}

function solve(N, M, inputs) {
  let cnt = 0;
  if (N <= M) {
    for (let i = 0; i < N; ++i) {
      const target = inputs[i];
      if (binSearch(inputs, N, M + N - 1, target)) {
        ++cnt;
      }
    }
  } else {
    for (let i = N; i < N + M; ++i) {
      const target = inputs[i];
      if (binSearch(inputs, 0, N - 1, target)) {
        ++cnt;
      }
    }
  }
  return cnt;
}

function binSearch(arr, left, right, target) {
  let start = left;
  let end = right;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return true;
    }
    if (+arr[mid] < +target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
}
