const events = require("events");
const fs = require("fs");
const readline = require("readline");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
(async function processLineByLine() {
  try {
    const rl = readline.createInterface({
      input: fs.createReadStream(filepath),
      crlfDelay: Infinity,
    });
    rl.on("line", (line) => {
      solve(line);
    });
    await events.once(rl, "close");
    //console.log("Reading file line by line with readline done.");
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    //console.log(`approximately ${Math.round(used * 100) / 100} MB`);
  } catch (err) {
    console.error(err);
  }
})();

const solve = (line) => {
  let [A, B, C] = line.split(" ");
  A = +A;
  B = +B;
  C = +C;
  let cnt = 0;

  let area1 = B - A;
  let area2 = C - B;
  if (area1 < area2) {
    cnt = area2 - 1;
  } else {
    cnt = area1 - 1;
  }

  console.log(cnt);
};
