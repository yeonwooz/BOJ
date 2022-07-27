main();

function main() {
    const [N, ...map] = init();
    let cnts = solve(N, map);
    printAnswer(cnts);
}

function init() {
  const fs = require("fs");
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  let  [N, ...map] = fs.readFileSync(path).toString().trim().split("\n");
  N = parseInt(N);
  map = map.map((row) => row.split("").map((num) => parseInt(num)));
  return [N, ...map];
}

function solve(N, map) {
  let visited = map.slice().map((row) => row.map(() => 0));

  let cnts = [];
  let cnt_idx = -1;
  for (let i = 0; i < N; ++i) {
    for (let j = 0; j < N; ++j) {
      if (map[i][j] === 1 && visited[i][j] === 0) {
        cnts[++cnt_idx] = 1;
        DFS(i, j);
      }
    }
  }

  function DFS(row, col) {
    visited[row][col] = 1;

    const i_d = [-1, 0, 1, 0];
    const j_d = [0, 1, 0, -1];

    for (let idx = 0; idx < 4; ++idx) {
      const next_i = row + i_d[idx];
      const next_j = col + j_d[idx];

      if (
        next_i < 0 ||
        next_j < 0 ||
        next_i >= N ||
        next_j >= N ||
        visited[next_i][next_j] === 1 ||
        map[next_i][next_j] === 0
      ) {
        continue;
      }

      cnts[cnt_idx]++;
      DFS(next_i, next_j);
    }
  }

  return cnts;
}

function printAnswer(cnts)
{
  console.log(cnts.length);
  cnts.sort((a, b) => a - b);
  console.log(cnts.join("\n"));
}
