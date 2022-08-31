main();

function main() {
  const [N, arr] = getInputs();
  solve(N, arr);
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  const [N, arr] = fs.readFileSync(filepath).toString().trim().split("\n");
  return [+N, arr.split(" ").map((n) => +n)];
}

function solve(N, arr) {
  const lis = [];
  let maxlen = 0;
  for (let i = 0; i < arr.length; ++i) {
    lis[i] = 1;
    maxlen = Math.max(1, maxlen);
    for (let j = 0; j < i; ++j) {
      if (arr[j] < arr[i]) {
        lis[i] = Math.max(lis[i], lis[j] + 1);
        maxlen = Math.max(lis[i], maxlen);
      }
    }
  }
  console.log(maxlen);
}
