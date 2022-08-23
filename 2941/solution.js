main();

function main() {
  const s = getInputs();
  solve(s);
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  const s = fs.readFileSync(filepath).toString().trim();
  return s;
}

function solve(s) {
  const chars = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
  let cnt = 0;
  let i = 0;
  while (s[i]) {
    if (s[i] === "c") {
      if (s[i + 1] === "=" || s[i + 1] === "-") {
        i += 2;
      } else {
        ++i;
      }
    } else if (s[i] === "d") {
      if (s[i + 1] === "z" && s[i + 2] === "=") {
        i += 3;
      } else if (s[i + 1] === "-") {
        i += 2;
      } else {
        ++i;
      }
    } else if (s[i] === "l" && s[i + 1] === "j") {
      i += 2;
    } else if (s[i] === "n" && s[i + 1] === "j") {
      i += 2;
    } else if (s[i] === "s" && s[i + 1] === "=") {
      i += 2;
    } else if (s[i] === "z" && s[i + 1] === "=") {
      i += 2;
    } else {
      ++i;
    }
    ++cnt;
  }
  console.log(cnt);
}
