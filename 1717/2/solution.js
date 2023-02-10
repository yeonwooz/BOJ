const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
});

let answer = "";
let n, m;
let init = 1;
let parents = [];

rl.on("line", (line) => {
  if (init-- === 1) {
    [n, m] = line.split(" ").map((x) => parseInt(x));
    parents = Array(n + 1)
      .fill(0)
      .map((_, idx) => idx);
  } else {
    const [cmd, a, b] = line.split(" ").map((x) => parseInt(x));

    switch (cmd) {
      case 0:
        union(a, b);
        break;
      case 1:
        answer += find(a) === find(b) ? "YES\n" : "NO\n";
        break;
        break;
    }
  }
});

rl.on("close", () => {
  console.log(answer.trim());
});

function union(x, y) {
  x = find(x);
  y = find(y);
  if (x < y) {
    parents[y] = x;
  } else if (x > y) {
    parents[x] = y;
  }
}

function find(x) {
  if (x === parents[x]) return x;
  parents[x] = find(parents[x]);
  return parents[x];
}
