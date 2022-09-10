main();

function main() {
  const inputs = getInputs();
  for (let i = 0; i < inputs.length; ++i) {
    const [str, n] = inputs[i].split(" ");
    solve(str, +n);
  }
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  const inputs = fs.readFileSync(filepath).toString().trim().split("\n");
  return inputs;
}

function solve(str, n) {
  let length = str.length;
  let visited = Array(length).fill(0);
  let chosen = [];
  let hasPermute = false;
  let cnt = 0;

  DFS(0);
  if (!hasPermute) console.log(`${str} ${n} = No permutation`);
  function DFS(depth) {
    if (depth === length) {
      ++cnt;
      if (cnt === n) {
        hasPermute = true;
        console.log(`${str} ${n} = ${chosen.join("")}`);
      }
      return;
    }

    for (let i = 0; i < length; ++i) {
      if (!visited[i]) {
        chosen[depth] = str[i];
        visited[i] = 1;
        DFS(depth + 1);
        visited[i] = 0;
      }
    }
  }
}
