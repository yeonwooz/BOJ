function main() {
  let [N, nums] = getInputs();
  N = parseInt(N);
  nums = nums.split(" ").map((num) => parseInt(num));
  solve(N, nums);
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const inputs = fs.readFileSync(filepath).toString().trim().split("\n");
  return inputs;
}

function solve(N, nums) {
  const sorted = nums.slice().sort((a, b) => a - b);

  const map = new Map();
  map.set(sorted[0], 0);

  for (let i = 1; i < N; ++i) {
    if (sorted[i] == sorted[i - 1]) {
      map.set(sorted[i], map.get(sorted[i - 1]));
    } else map.set(sorted[i], map.get(sorted[i - 1]) + 1);
  }
  const answer = [];
  for (let i = 0; i < N; ++i) {
    answer.push(map.get(nums[i]));
  }
  console.log(answer.join(" "));
}

main();
