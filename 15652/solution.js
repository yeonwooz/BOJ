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
  let chosen = [];

  DFS(0);
  function DFS(cnt) {
    if (cnt === M) {
      console.log(chosen.join(" "));
    } else {
      for (let i = 1; i <= N; ++i) {
        if (cnt === 0 || chosen[cnt - 1] <= i) {
          chosen[cnt] = i;
          DFS(cnt + 1);
        }
      }
    }
  }
}
