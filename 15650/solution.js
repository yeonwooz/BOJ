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
  let visited = Array().fill(0);
  let chosen = [];

  DFS(0);
  function DFS(cnt) {
    if (cnt === M) {
      console.log(chosen.join(" "));
    } else {
      for (let i = 1; i <= N; ++i) {
        if (!visited[i] && (cnt === 0 || chosen[cnt - 1] < i)) {
          chosen[cnt] = i;
          visited[i] = 1;
          DFS(cnt + 1);
          visited[i] = 0;
        }
      }
    }
  }
}
