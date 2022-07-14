function main() {
  const inputs = getInputs();
  const meta = inputs.shift();
  solve(meta, inputs);
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const inputs = fs.readFileSync(filepath).toString().trim().split("\n");
  return inputs;
}

function solve(meta, vertices) {
  meta = meta.split(" ");
  const [N, M, V] = meta.map((num) => parseInt(num));
  vertices = vertices.map((vertex) =>
    vertex.split(" ").map((num) => parseInt(num))
  );
  //   const arr = new Array(N + 1).fill().map(() => new Array(N + 1).fill(0));
  const arr = Array.from(new Array(N + 1), () => new Array(N + 1).fill(0));
  for (vertex of vertices) {
    arr[vertex[0]][vertex[1]] = 1;
    arr[vertex[1]][vertex[0]] = 1;
  }

  const d_visited = new Array(N + 1).fill(0);
  const b_visited = new Array(N + 1).fill(0);

  let d_result = [];
  let b_result = [];

  d_result = DFS(arr, d_visited, V, N, d_result);
  b_result = BFS(arr, b_visited, V, N, b_result);

  console.log(d_result.join(" "));
  console.log(b_result.join(" "));
}

function DFS(arr, visited, V, N, result) {
  visited[V] = 1;
  result.push(V);

  for (let j = 1; j <= N; ++j) {
    if (arr[V][j] === 1 && !visited[j]) {
      return DFS(arr, visited, j, N, result);
    }
  }
  return result;
}

function BFS(arr, visited, V, N, result) {
  const queue = [];
  queue.push(V);
  result.push(V);
  visited[V] = 1;

  while (queue.length != 0) {
    const i = queue.shift();
    for (let j = 1; j <= N; ++j) {
      if (arr[i][j] === 1 && !visited[j]) {
        queue.push(j);
        result.push(j);
        visited[j] = 1;
      }
    }
  }
  return result;
}

main();
