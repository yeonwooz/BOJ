main();

function main() {
  const str = getInputs();
  solve(str);
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const str = fs.readFileSync(filepath).toString().trim();
  return str;
}

function solve(str) {
  if (str.length === 0) return 0;
  let set = new Set();
  for (let i = 0; i < str.length; ++i) {
    let s = "";
    for (let j = i; j < str.length; ++j) {
      s += str[j];
      if (!set.has(s)) set.add(s);
    }
  }
  console.log(set.size);
}
