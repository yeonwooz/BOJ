const events = require("events");
const fs = require("fs");
const readline = require("readline");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
(async function processLineByLine() {
  let inputOrder = 0;
  let s, boom;

  try {
    const rl = readline.createInterface({
      input: fs.createReadStream(filepath),
      crlfDelay: Infinity,
    });
    rl.on("line", (line) => {
      inputOrder++;
      if (inputOrder === 1) {
        s = line;
      } else if (inputOrder === 2) {
        boom = line;
        solve(s, boom);
      }
    });
    await events.once(rl, "close");
    //console.log("Reading file line by line with readline done.");
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    // console.log(`approximately ${Math.round(used * 100) / 100} MB`);
  } catch (err) {
    console.error(err);
  }
})();

function solve(s, boom) {
  while (true) {
    if (!s || s.length == 0) {
      console.log("FRULA");
      return;
    }
    if (!s.includes(boom)) break;
    s = s.replace(boom, "");
  }
  console.log(s);
}
