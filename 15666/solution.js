main();

function main() {
  const [N, M, inputs] = getInputs();
  solve(N, M, inputs);
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  let [meta, inputs] = fs.readFileSync(filepath).toString().trim().split("\n");
  meta = meta.split(" ");
  return [+meta[0], +meta[1], inputs.split(" ").map((n) => +n)];
}

function solve(N, M, inputs) {
  inputs.sort((a, b) => a - b);
  let answerSet = new Set();
  let chosen = [];
  DFS(0);
  function DFS(depth) {
    if (depth === M) {
      let str = chosen.join(" ");
      if (!answerSet.has(str)) {
        answerSet.add(str);
      }
      return;
    }

    for (let i = 0; i < N; ++i) {
      if (depth === 0 || chosen[depth - 1] <= inputs[i]) {
        chosen[depth] = inputs[i];
        DFS(depth + 1);
      }
    }
  }

  console.log(Array.from(answerSet).join("\n"));
}
