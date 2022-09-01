/* 
    트리 : 루트 노드부터 BFS 탐색
    (DFS 시 메모리 초과)
*/

main();

function main() {
  const [N, connections] = getInputs();
  solve(N, connections);
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  const [N, ...connections] = fs
    .readFileSync(filepath)
    .toString()
    .trim()
    .split("\n");
  return [+N, connections.map((str) => str.split(" ").map((n) => +n))];
}

function solve(N, connections) {
  const tree = makeTree(N, connections);

  const answer = [];
  BFS(1);
  function BFS(v) {
    const visited = Array(N + 1).fill(0);
    visited[v] = 1;

    const queue = [v];

    while (queue.length) {
      const cur = queue.shift();

      for (let i = 0; i < tree[cur].length; ++i) {
        const next = tree[cur][i];
        if (!visited[next]) {
          visited[next] = 1;
          answer[next] = cur;
          queue.push(next);
        }
      }
    }
  }

  console.log(answer.join("\n").trim());
}

function makeTree(N, connections) {
  const tree = Array(N + 1);
  for (let i = 1; i <= N; ++i) {
    tree[i] = [];
  }

  for (let idx = 0; idx < N - 1; ++idx) {
    const [i, j] = connections[idx];
    tree[i].push(j);
    tree[j].push(i);
  }
  return tree;
}
