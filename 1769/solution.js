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

function solve(n) {
  let cnt = 0;
  const num = recur(n);
  console.log(cnt);
  console.log(num % 3 === 0 ? "YES" : "NO");

  function recur(n) {
    if (Number(n) < 10) return n;
    n = String(n).split("").reduce((acc, cur) => acc + +cur, 0);
    ++cnt;
    return recur(n);
  }
}
