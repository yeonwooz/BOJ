function main() {
  const inputs = getInputs();
  const N = parseInt(inputs.shift());
  const arr1 = inputs
    .shift()
    .split(" ")
    .map((num) => parseInt(num));

  const M = parseInt(inputs.shift());
  const arr2 = inputs
    .shift()
    .split(" ")
    .map((num) => parseInt(num));
  solve(N, arr1, arr2);
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const inputs = fs.readFileSync(filepath).toString().trim().split("\n");
  return inputs;
}

function solve(N, arr1, arr2) {
  arr1.sort((a, b) => a - b);
  const result = [];
  for (let num of arr2) {
    result.push(binsearch(arr1, N, num) >= 0 ? 1 : 0);
  }
  console.log(result.join("\n"));
}

function binsearch(arr, len, target) {
  let start = 0;
  let end = len - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) {
      start = mid + 1;
    }
    if (arr[mid] > target) {
      end = mid - 1;
    }
  }
  return -1;
}

main();
