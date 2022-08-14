main();

function main() {
  const num = getInputs();
  solve(num);
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  const num = fs.readFileSync(filepath).toString().trim();
  return num;
}

function solve(num) {
  const map = new Map();
  for (let i = 0; i < num.length; ++i) {
    let key = num[i];
    if (key === "6") {
      key = "9";
    }
    if (!map.get(key)) {
      map.set(key, 1);
    } else {
      map.set(key, map.get(key) + 1);
    }
  }
  if (map.get("9") > 0) {
    map.set("9", Math.floor((map.get("9") + 1) / 2));
  }
  let max = 0;
  for (let [key, value] of map) {
    if (value > max) max = value;
  }
  console.log(max);
}
