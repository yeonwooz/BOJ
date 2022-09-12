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
      const pieces = [1, 1, 2, 2, 2, 8];

      line = line.split(" ").map((n) => +n);
      for (let i = 0; i < line.length; ++i) {
        line[i] = pieces[i] - line[i];
      }
      console.log(line.join(" "));

      //   console.log(`Line from file: ${line}`);
    });
    await events.once(rl, "close");
    //console.log("Reading file line by line with readline done.");
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    //console.log(`approximately ${Math.round(used * 100) / 100} MB`);
  } catch (err) {
    console.error(err);
  }
})();
