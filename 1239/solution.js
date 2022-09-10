main();

function main() {
  const [N, rates] = getInputs();
  console.log(solve(N, rates));
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  const [N, rates] = fs.readFileSync(filepath).toString().trim().split("\n");
  return [+N, rates.split(" ").map((n) => +n)];
}

function solve(N, rates) {
  let cnt = 0;
  rates.sort((a, b) => b - a);
  console.log(rates);
  for (let i = 0; i < N; ++i) {
    if (rates[i] > 50) return 0;
    if (rates[i] === 50) return 1;

    let start = i;
    let end = (i + 1) % N;
    while (end % N !== start) {
      console.log(
        "start: [",
        start,
        "]",
        rates[start],
        "end: [",
        end,
        "]",
        rates[end]
      );
      let sum = 0;
      let idx = start;
      while (idx % N !== end) {
        sum += rates[idx];
        idx = (idx + 1) % N;
      }
      if (sum + rates[end] > 50) break;
      if (sum + rates[end] === 50) {
        console.log("sum", sum + rates[end], "cnt", cnt);
        cnt++;
        break;
      }

      end = (end + 1) % N;
    }
  }

  return cnt;
}
