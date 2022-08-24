main();

function main() {
  const [N, M, nums] = getInputs();
  solve(N, M, nums);
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  const inputs = fs.readFileSync(filepath).toString().trim().split("\n");
  return [+inputs[0], +inputs[1], inputs[2].split(" ").map((n) => +n)];
}

function solve(N, M, nums) {
  nums.sort();
  let cnt = 0;
  let len = nums.length;
  for (let i = 0; i < len - 1; ++i) {
    for (let j = i + 1; j < len; ++j) {
      if (i !== j && nums[i] + nums[j] === M) {
        ++cnt;
      }
    }
  }
  console.log(cnt);
}

//sort
//qsort
