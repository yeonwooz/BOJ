main();

function main() {
  const [N, relations] = getInputs();
  solve(N, relations);
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  const [N, ...relations] = fs
    .readFileSync(filepath)
    .toString()
    .trim()
    .split("\n");
  return [+N, relations.map((str) => str.split(" "))];
}

function solve(N, relations) {
  let result = "";

  const tree = {};

  for (let i = 0; i < N; ++i) {
    const [node, left, right] = relations[i];
    tree[node] = [left, right];
  }

  preOrder("A");
  result += "\n";
  midOrder("A");
  result += "\n";
  postOrder("A");
  console.log(result);

  function preOrder(node) {
    if (node === ".") return;
    const [left, right] = tree[node];
    result += node;
    preOrder(left);
    preOrder(right);
  }

  function midOrder(node) {
    if (node === ".") return;
    const [left, right] = tree[node];
    midOrder(left);
    result += node;
    midOrder(right);
  }

  function postOrder(node) {
    if (node === ".") return;
    const [left, right] = tree[node];
    postOrder(left);
    postOrder(right);
    result += node;
  }
}
