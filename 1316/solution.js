main();

function main() {
  const [N, words] = getInputs();
  solve(N, words);
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const [N, ...inputs] = fs
    .readFileSync(filepath)
    .toString()
    .trim()
    .split("\n");
  return [N, inputs];
}

function solve(N, words) {
  let cnt = 0;
  for (let i = 0; i < N; ++i) {
    if (isGroup(words[i])) ++cnt;
  }
  console.log(cnt);
}

function isGroup(word) {
  const set = new Set();
  for (let i = 0; i < word.length; ++i) {
    if (set.has(word[i])) {
      if (word[i - 1] !== word[i]) return false;
    }
    set.add(word[i]);
  }
  return true;
}
