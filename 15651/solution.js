main();

function main() {
  const [N, M] = getInputs();
  solve(N, M);
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  const [N, M] = fs.readFileSync(filepath).toString().trim().split(" ");
  return [+N, +M];
}

function solve(N, M) {
  let answer = [];
  let chosen = [];

  DFS(0);
  function DFS(depth) {
    if (depth === M) {
      answer.push(chosen.join(" "));
      return;
    }

    for (let i = 1; i <= N; ++i) {
      chosen[depth] = i;
      DFS(depth + 1);
    }
  }

  console.log(answer.join("\n"));
}
