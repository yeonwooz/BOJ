const events = require("events");
const fs = require("fs");
const readline = require("readline");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
(async function processLineByLine() {
  let sum = 0;
  try {
    const rl = readline.createInterface({
      input: fs.createReadStream(filepath),
      crlfDelay: Infinity,
    });
    rl.on("line", (num) => {
      sum += Number(num);
    });
    await events.once(rl, "close");
    console.log(sum);
    //console.log("Reading file line by line with readline done.");
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    //console.log(`approximately ${Math.round(used * 100) / 100} MB`);
  } catch (err) {
    console.error(err);
  }
})();
