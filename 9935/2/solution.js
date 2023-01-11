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
    const len = s.length;
    if (!s || len == 0) {
      console.log("FRULA");
      return;
    }

    let boomIdx = 0;
    let sIdx = 0;
    for (let i = 0; i < len; ++i) {
      if (s[i] === boom[boomIdx]) {
        sIdx = i;
        boomIdx++;
        break;
      }
    }
    if (boomIdx === 0) break;

    while (boomIdx < boom.lenth && sIdx < len) {
      // if (!s.includes(boom)) break;
      if (s[sIdx] !== boom[boomIdx]) break;
      boomIdx++;
      sIdx++;
    }
    s = s.replace(boom, "");
  }
  console.log(s);
}
