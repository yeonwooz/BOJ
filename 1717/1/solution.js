const readline = require("readline");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const rl = readline.createInterface({
  input: process.stdin,
  crlfDelay: Infinity,
});

let idx = 0;
let n, m;
let arr = [];
const answer = [];
rl.on("line", (line) => {
  if (idx === 0) {
    [n, m] = line.split(" ").map((x) => parseInt(x));
    arr = Array(n + 1).fill(-1);
  } else {
    const [cmd, a, b] = line.split(" ").map((x) => parseInt(x));

    switch (cmd) {
      case 0:
        union(a,b);
        break;
      case 1:
        // if (arr[a] === arr[b]) answer.push("YES");
        // else answer.push("NO");
        console.log(findRoot(arr, a) === findRoot(arr, b) ? "YES" : "NO");
        break;
    }
  }

  idx++;
});

// rl.on("close", () => {
//   answer.forEach((x) => console.log(x));
// });

function findRoot(arr, x) {
  if (arr[x] < 0) return x;
  arr[x] = findRoot(arr, arr[x]);
  return arr[x];
}

function union(x, y) {
    x = findRoot(arr, x);
    y = findRoot(arr, y);
    if (x != y) {
        arr[x] = y;
    }
}