const events = require("events");
const fs = require("fs");
const readline = require("readline");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
(async function processLineByLine() {
  let inputOrder = 0;
  let N, M;
  const busInfo = [];
  let start, end;
  try {
    const rl = readline.createInterface({
      input: fs.createReadStream(filepath),
      crlfDelay: Infinity,
    });
    rl.on("line", (line) => {
      inputOrder++;
      if (inputOrder === 1) {
        N = Number(line);
      } else if (inputOrder === 2) {
        M = Number(line);
      } else if (inputOrder === M + 3) {
        [start, end] = line.split(" ").map((n) => +n);
        solve(N, M, busInfo, start, end);
      } else {
        busInfo.push(line.split(" ").map((n) => +n));
      }
      //   console.log(`Line from file: ${line}`);
    });
    await events.once(rl, "close");
    //console.log("Reading file line by line with readline done.");
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    // console.log(`approximately ${Math.round(used * 100) / 100} MB`);
  } catch (err) {
    console.error(err);
  }
})();

function solve(N, M, busInfo, start, end) {
    // 시간제한 0.5초 라서 queue로 해야 함
  const queue = [];
  for (let idx = 0; idx < busInfo.length; ++idx) {
    const [i, j, cost] = busInfo[idx];
    matrix[i][j] = cost;
  }
}
