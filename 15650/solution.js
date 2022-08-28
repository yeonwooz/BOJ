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
  //   let nums = [];
  //   for (let i = 0; i <= N; ++i) {
  //     nums[i] = i;
  //   }
  let result = 0;

  DFS(0);
  function DFS(cnt) {
    if (cnt === M) {
      console.log(chosen);
      ++result;
    } else {
      for (let i = 1; i <= N; ++i) {
        if (!visited[i]) {
          chosen[cnt] = i;
          visited[i] = 1;
          DFS(cnt + 1);
          visited[i] = 0;
        }
      }
    }
  }
  console.log(result);
}
