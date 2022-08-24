main();

function main() {
  const num = getInputs();
  console.log(solve(num) ? "YES" : "NO");
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  const numstr = fs.readFileSync(filepath).toString().trim();
  return +numstr;
}

function solve(num) {
  const fac_nums = [];
  getFacNums(num, fac_nums);

  let i = fac_nums.length - 1;

  while (i >= 0) {
    console.log(num);
    let n = fac_nums[i];
    if (num === 0) return true;
    if (num - n >= 0) {
      num -= n;
    }
    --i;
  }
  if (num === 0) return true;
  return false;
}

function getFacNums(num, fac_nums) {
  fac_nums.push(1);

  let n = 1;
  while (true) {
    let factorial = fac(n);
    if (factorial > num) break;
    fac_nums.push(factorial);
    ++n;
  }
}

function fac(n) {
  let result = 1;
  let i = 1;
  while (i <= n) {
    result = result * i;
    ++i;
  }
  return result;
}
