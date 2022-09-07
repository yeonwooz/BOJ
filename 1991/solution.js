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
    result += node; // 노드 기록 후
    preOrder(left);  // 왼쪽순회, 재귀 빠져나오고
    preOrder(right);  // 오른쪽순회
  }

  function midOrder(node) {
    if (node === ".") return;
    const [left, right] = tree[node];
    midOrder(left);  // 왼쪽 순회 후 재귀 빠져나오고
    result += node;  // 노드 기록
    midOrder(right);  // 오른쪽 순회
  }

  function postOrder(node) {
    if (node === ".") return;
    const [left, right] = tree[node];
    postOrder(left);  // 왼쪽 순회 후 재귀 빠져나오고
    postOrder(right);  // 오른쪽 순회 후 재귀 빠져나오고
    result += node;   // 재귀 빠져나올 때 노드 기록
  }
}
