main();

function main() {
  const [N, A] = getInputs();
  solve(N, A);
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  const [N, A] = fs.readFileSync(filepath).toString().trim().split("\n");
  return [+N, A.split(" ").map((n) => +n)];
}

function solve(N, A) {
  const obj = [];
  for (let i = 0; i < N; ++i) {
    obj[i] = { index: i, value: A[i] };
  }
  obj.sort((a, b) => a.value - b.value);

  let p = [];
  for (let i = 0; i < N; ++i) {
    p[i] = { index: obj[i].index, value: i };
  }
  p = p.sort((a, b) => a.index - b.index).map((element) => element.value);
  console.log(p.join(' '));
}
