const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  crlfDelay: Infinity,
});

let idx = 0;
let N = 0;
let M = 0;
// let arr = [];
let parents = [];
let plan = [];
rl.on("line", (line) => {
  if (idx === 0) {
    N = parseInt(line);
    parents = Array(N + 1)
      .fill(0)
      .map((_, i) => i);
  }
  if (idx === 1) {
    M = parseInt(line);
  }
  if (N && 1 < idx && idx < N + 2) {
    line = line.split(" ");
    for (let i = 0; i < line.length; ++i) {
      if (line[i] === "1") {
        union(idx - 1, i + 1);
      }
    }
  }
  if (N && idx === N + 2) {
    plan = line.split(" ").map((x) => parseInt(x));
  }
  idx++;
});

rl.on("close", () => {
  console.log(solve() ? "YES" : "NO");
});

function solve() {
  for (let i = 0; i < plan.length - 1; ++i) {
    const xroot = find(plan[i]);
    const yroot = find(plan[i + 1]);
    if (xroot !== yroot) return false;
  }
  return true;
}

function union(x, y) {
  x = find(x);
  y = find(y);
  if (x === y) return;
  if (x < y) parents[y] = x;
  else parents[x] = y;
}

function find(x) {
  if (parents[x] === x) return x;
  parents[x] = find(parents[x]);
  return parents[x];
}
