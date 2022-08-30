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
  let visited = Array(N + 1).fill(0);
  let chosen = [];

  DFS(0);
  function DFS(depth) {
    if (depth === M) {
      console.log(chosen.join(" "));
      return;
    }

    for (let i = 1; i <= N; ++i) {
      if (!visited[i]) {
        chosen[depth] = i;
        visited[i] = 1;
        DFS(depth + 1);
        visited[i] = 0;
      }
    }
  }
}
