function main() {
  let [meta, ...arr] = getInputs();
  meta = meta.split(" ").map((num) => parseInt(num));
  arr = arr.map((row) => row.split(" ").map((num) => parseInt(num)));
  solve(meta[0], meta[1], arr);
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const inputs = fs.readFileSync(filepath).toString().trim().split("\n");
  return inputs;
}

function solve(m, n, arr) {
  if (allRipe(arr, m, n)) {
    console.log(0);
    return;
  }

  let days = 0;
  let visited = Array(n)
    .fill(0)
    .map(() => Array(m).fill(0));

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (arr[i][j] === 1 && visited[i][j] === 0) {
        BFS(i, j);
      }
    }0
  }

  function BFS(i, j) {
    const queue = [];
    queue.push({ x: i, y: j, depth: 0 });
    visited[i][j] = 1;
    let depth = 0;

    while (queue.length > 0) {
      if (allRipe(arr, m, n)) break;

      console.log("days", days, arr, "\n");
      const popped = queue.shift();
      depth = popped.depth;
      days = depth;

      const ch_i = [0, -1, 0, +1];
      const ch_j = [-1, 0, +1, 0];

      for (let idx = 0; idx < 4; ++idx) {
        const next_i = popped.x + ch_i[idx];
        const next_j = popped.y + ch_j[idx];
        if (next_i < 0 || next_j < 0 || next_i >= n || next_j >= m) continue;

        if (arr[next_i][next_j] != 0 || visited[next_i][next_j] === 1) continue;

        queue.push({ x: next_i, y: next_j, depth: depth + 1 });
        visited[next_i][next_j] = 1;
        arr[next_i][next_j] = 1;
      }
    }
  }

  if (!allRipe(arr, m, n)) {
    console.log(-1);
    return;
  }
  console.log(days);
  return;
}

function allRipe(arr, m, n) {
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (arr[i][j] === 0) return false;
    }
  }
  return true;
}

main();
