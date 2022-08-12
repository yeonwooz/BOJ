main();

function main() {
  const positions = getInputs();
  console.log(solve(positions) ? "Valid" : "Invalid");
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const inputs = fs.readFileSync(filepath).toString().trim().split("\n");
  return inputs;
}

function solve(positions) {
  const len = positions.length;
  if (len < 36) return false;
  const set = new Set();
  for (let i = 0; i < len; ++i) {
    if (set.has(positions[i])) return false;
    if (i < len - 1 && !promising(positions[i], positions[i + 1])) return false;
    set.add(positions[i]);
  }

  if (promising(positions[len - 1], positions[0])) return true;

  return false;
}

function promising(current, next) {
  const currentCode = current.charCodeAt();
  const currentNum = +current[1];
  const nextCode = next.charCodeAt();
  const nextNum = +next[1];

  if (currentCode - 1 === nextCode || currentCode + 1 === nextCode) {
    if (currentNum - 2 === nextNum || currentNum + 2 === nextNum) return true;
  }

  if (currentCode - 2 === nextCode || currentCode + 2 === nextCode) {
    if (currentNum - 1 === nextNum || currentNum + 1 === nextNum) return true;
  }
  return false;
}
