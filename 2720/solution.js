const events = require("events");
const fs = require("fs");
const readline = require("readline");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

(async function processLineByLine() {
  let inputOrder = 0;
  let T;

  try {
    const rl = readline.createInterface({
      input: fs.createReadStream(filepath),
      crlfDelay: Infinity,
    });
    rl.on("line", (line) => {
      if (inputOrder++ === 0) {
        T = Number(line);
      } else {
        console.log(solve(Number(line)));
      }
    });
    await events.once(rl, "close");
    //console.log("Reading file line by line with readline done.");
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    //console.log(`approximately ${Math.round(used * 100) / 100} MB`);
  } catch (err) {
    console.error(err);
  }
})();

function solve(change) {
  const cnts = [0, 0, 0, 0];
  let a = 25;
  let b = 10;
  let c = 5;
  let d = 1;

  while (change >= 0) {
    if (change === 0) return cnts.join(" ");
    if (change - a >= 0) {
      change -= a;
      cnts[0]++;
    } else if (change - b >= 0) {
      change -= b;
      cnts[1]++;
    } else if (change - c >= 0) {
      change -= c;
      cnts[2]++;
    } else if (change - d >= 0) {
      change -= d;
      cnts[3]++;
    } else {
      console.log("error");
    }
  }
}
