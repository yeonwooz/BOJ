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
    result += solve(p, nums) ? `[${nums.join(",")}]` : "error";
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
  for (let i = 0; i < p.length; ++i) {
    switch (p[i]) {
      case "R":
        R(nums);
        break;
      case "D":
        let result = D(nums);
        if (result === -1) return false;
        break;
      default:
        break;
    }
  }
  return true;
}

function R(arr) {
  arr.reverse();
}

function D(arr) {
  if (arr.length === 0) return -1;
  return arr.shift();
}
