main();

function main() {
  const [N, K] = getInputs();
  solve(N, K);
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  const [N, K] = fs.readFileSync(filepath).toString().trim().split(" ");
  return [+N, +K];
}

function solve(N, K) {
  const queue = [];
  const answer = [];
  for (let i = 0; i < N; ++i) {
    queue.push(i + 1);
  }

  let cnt = 1;
  while (queue.length) {
    const shiftitem = queue.shift();
    if (cnt % K === 0) {
      answer.push(shiftitem);
    } else {
      queue.push(shiftitem);
    }
    cnt++;
  }

  console.log("<" + answer.join(", ") + ">");
}
