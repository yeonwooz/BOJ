main();

function main() {
  const [A, B] = getInputs();
  console.log(solve(A, B));
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  const [A, B] = fs.readFileSync(filepath).toString().trim().split(" ");
  return [+A, +B];
}

function solve(A, B) {
  let cnt = 0;

  while (true) {
    if (A === B) {
      ++cnt;
      break;
    } else if (A > B) {
      cnt = -1;
      break;
    }

    if (B % 2 === 0) {
      B /= 2;
      ++cnt;
    } else if (B % 10 === 1) {
      B = Math.floor(B / 10);
      ++cnt;
    } else {
      cnt = -1;
      break;
    }
  }

  return cnt;
}
