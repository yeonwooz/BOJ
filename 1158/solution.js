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
  let arr = Array(N);
  for (let i = 0; i < N; ++i) {
    arr[i] = i + 1;
  }

  let front = -1;
  let people = N;
  let str = "";
  while (people > 0) {
    let cnt = K;
    while (cnt > 0) {
      front += 1;
      front %= N;
      if (arr[front] > 0) {
        --cnt;
      }
    }
    str += arr[front];
    arr[front] = 0;
    --people;
  }
  console.log("<" + str.split("").join(", ") + ">");
}
