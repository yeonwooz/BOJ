const { once } = require("events");

main();

function main() {
  const str = getInputs();
  solve(str);
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  const str = fs.readFileSync(filepath).toString().trim();
  return str;
}

function solve(str) {
  let zeroCnt = str[0] === "0" ? 1 : 0;
  let oneCnt = str[0] === "1" ? 1 : 0;

  for (let i = 1; i < str.length; ++i) {
    if (str[i - 1] !== str[i]) {
      if (str[i] === "0") {
        ++zeroCnt;
      } else {
        ++oneCnt;
      }
    }
  }

  console.log(Math.min(zeroCnt, oneCnt));
}
