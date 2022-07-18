function main() {
  const inputs = getInputs();
  const N = parseInt(inputs.shift());
  const nums = inputs[0].split(" ").map((num) => parseInt(num));
  solve(N, nums);
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const inputs = fs.readFileSync(filepath).toString().trim().split("\n");
  return inputs;
}

function solve(N, nums) {
  let sorted = nums.slice();

  sorted = qsort(sorted);
  const map = new Map();
  map.set(sorted[0], 0);

  for (let i = 1; i < N; ++i) {
    if (sorted[i] == sorted[i - 1]) {
      map.set(sorted[i], map.get(sorted[i - 1]));
    } else map.set(sorted[i], map.get(sorted[i - 1]) + 1);
  }
  let answer = "";
  for (let i = 0; i < N; ++i) {
    answer += map.get(nums[i]);
    if (i < N - 1) answer += " ";
  }
  console.log(answer);
}

function qsort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] <= pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  const lsorted = qsort(left);
  const rsorted = qsort(right);
  return [...lsorted, pivot, ...rsorted];
}

main();
