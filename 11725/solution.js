/* 
    트리 : 루트 노드부터 DFS탐색
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
  const root = 1;
  const visited = Array(N + 1).fill(0);
  const parentsInfo = Array(N + 1).fill(0); // 0,1번 제외, 2번부터 N번노드까지의 부모노드 기록

  DFS(1);
  visited[root] = 1;
  function DFS(v) {
    visited[v] = 1;

    for (let i = 1; i < N + 1; ++i) {
      if (!visited[i] && isConnected(connections, N, v, i)) {
        parentsInfo[i] = v;
        DFS(i);
      }
    }
  }
  parentsInfo.shift();
  parentsInfo.shift();
  console.log(parentsInfo.join("\n"));
}

function isConnected(connections, N, i, j) {
  for (let idx = 0; idx < N - 1; ++idx) {
    const node = connections[idx];
    if ((node[0] === i && node[1] === j) || (node[0] === j && node[1] === i)) {
      return true;
    }
  }
  return false;
}
