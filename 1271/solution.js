const nums = getInputs();
solve(nums[0], nums[1]);
function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const nums = fs.readFileSync(filepath).toString().trim().split(" ");
  return nums.map(BigInt);
}

function solve(m, n) {
  let answer = "";
  answer += m / n + "\n" + (m % n);
  console.log(answer);
}
