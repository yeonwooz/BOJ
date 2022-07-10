const inputs = getInputs();
const N = parseInt(inputs.shift());
const nums = inputs[0].split(" ").map((num) => parseInt(num));
console.log(solve(N, nums));

function getInputs() {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
  return inputs;
}

function solve(N, nums) {
  let cnt = 0;
  for (let i = 0; i < N; ++i) {
    cnt += isPrime(nums[i]) ? 1 : 0;
  }
  return cnt;
}

function isPrime(num) {
  if (num == 1) return false;
  if (num == 2) return true;
  let i = 2;

  while (i * i <= num) {
    if (num % i == 0) return false;
    ++i;
  }
  return true;
}
