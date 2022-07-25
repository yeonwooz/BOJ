function main() {
  const inputs = getInputs();
  const meta = inputs.shift().split(" ");
  const [N, M, arr] = [
    parseInt(meta[0]),
    parseInt(meta[1]),
    inputs.map((str) => str.split("").map((num) => parseInt(num))),
  ];
  solve(N, M, arr);
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const inputs = fs.readFileSync(filepath).toString().trim().split("\n");
  return inputs;
}

function solve(N, M, arr) {
  let visited = new Array(N).fill(0).map(() => new Array(M).fill(0));
  DFS();
  function DFS() {
    const stack = [];
    visited[0][0] = 1;
    stack.push({ i: 0, j: 0, depth: 1 });

    while (stack.length > 0) {
      const popped = stack.shift();
      let depth = popped.depth;
      if (popped.i === N - 1 && popped.j === M - 1) {
        console.log(popped.depth);
        break;
      }

      const i_d = [0, +1, 0, -1];
      const j_d = [+1, 0, -1, 0];
      for (let idx = 0; idx < 4; ++idx) {
        const next_i = popped.i + i_d[idx];
        const next_j = popped.j + j_d[idx];
        if (
          next_i < 0 ||
          next_j < 0 ||
          next_i > N - 1 ||
          next_j > M - 1 ||
          visited[next_i][next_j] === 1 ||
          arr[next_i][next_j] === 0
        ) {
          continue;
        }

        visited[next_i][next_j] = 1;
        stack.push({ i: next_i, j: next_j, depth: depth + 1 });
      }
    }
  }
}

main();
