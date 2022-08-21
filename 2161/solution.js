main();

function main() {
  const N = getInputs();
  solve(N);
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  const N = fs.readFileSync(filepath).toString().trim();
  return +N;
}

function solve(N) {
  const queue = Array(N);
  for (let i = 0; i < N; ++i) {
    queue[i] = i + 1;
  }
  let answer = [];
  while (queue.length > 1) {
    const trash = queue.shift();
    answer.push(trash);
    const num = queue.shift();
    queue.push(num);
  }
  answer.push(queue[0]);
  console.log(answer.join(" "));
}
