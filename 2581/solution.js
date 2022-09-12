const events = require("events");
const fs = require("fs");
const readline = require("readline");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
(async function processLineByLine() {
  let idx = 0;
  const inputs = [];
  try {
    const rl = readline.createInterface({
      input: fs.createReadStream(filepath),
      crlfDelay: Infinity,
    });
    rl.on("line", (line) => {
      inputs[idx++] = Number(line);
      if (idx === 2) solve(inputs[0], inputs[1]);
    });
    await events.once(rl, "close");
    //console.log("Reading file line by line with readline done.");
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    //console.log(`approximately ${Math.round(used * 100) / 100} MB`);
  } catch (err) {
    console.error(err);
  }
})();

function solve(M, N) {
  let min;
  let sum = 0;
  for (let i = M; i <= N; ++i) {
    if (isPrime(i)) {
      sum += i;
      if (!min) min = i;
    }
  }
  console.log(!min ? -1 : sum + "\n" + min);
}

function isPrime(num) {
  if (num === 1) return false;
  if (num === 2) return true;
  let divisor = 2;
  while (divisor * divisor <= num) {
    if (num % divisor === 0) return false;
    ++divisor;
  }
  return true;
}
