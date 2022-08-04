main();

function main() {
  const n = getInputs();
  solve(n);
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const n = fs.readFileSync(filepath).toString().trim();
  return n;
}

function solve(str) {
  let arr = str.split("");
  qsort(arr, 0, str.length - 1);
  console.log(arr.join(""));
}

function qsort(arr, L, R) {
  let left = L;
  let right = R;
  let pivot = arr[Math.floor((left + right) / 2)];

  while (left <= right) {
    while (arr[left] > pivot) ++left;
    while (arr[right] < pivot) --right;
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      ++left;
      --right;
    }
  }

  if (L < right) qsort(arr, L, right);
  if (left < R) qsort(arr, left, R);
}
