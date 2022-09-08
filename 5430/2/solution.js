main();

function main() {
  const [T, inputs] = getInputs();
  let result = "";
  for (let i = 0; i < T; ++i) {
    const p = inputs.shift();
    const n = Number(inputs.shift());
    let nums = inputs.shift();
    nums = nums
      .slice(1, nums.length - 1)
      .split(",")
      .map((n) => +n)
      .filter((n) => n);
    let changed = solve(p, nums);
    result += changed === "error" ? "error" : `[${changed.join(",")}]`;
    result += i < T - 1 ? "\n" : "";
  }
  console.log(result);
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  const [T, ...inputs] = fs
    .readFileSync(filepath)
    .toString()
    .trim()
    .split("\n");
  return [+T, inputs];
}

function solve(p, nums) {
  let reversed = false;
  let left = 0;
  let right = nums.length;
  for (let i = 0; i < p.length; ++i) {
    switch (p[i]) {
      case "R":
        reversed = !reversed;
        break;
      case "D":
        if (left === right) return "error";
        if (reversed) {
          --right;
        } else {
          ++left;
        }
        break;
      default:
        break;
    }
  }
  let answer = nums.slice(left, right);
  if (reversed) {
    answer.reverse();
  }
  return answer;
}
