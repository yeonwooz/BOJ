const events = require("events");
const fs = require("fs");
const readline = require("readline");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const maxDp = [
  [0, 0, 0],
  [0, 0, 0],
];
const minDp = [
  [0, 0, 0],
  [0, 0, 0],
];

main();

function main() {
  // const [N, inputs] = getInputs();
  // solve(N, inputs);

  (async function processLineByLine() {
    try {
      const rl = readline.createInterface({
        input: fs.createReadStream(filepath),
        crlfDelay: Infinity,
      });

      let row = 0;
      rl.on("line", (line) => {
        if (line.length > 1) {
          let [x, y, z] = line.split(" ");

          maxDp[row][0] =
            Math.max(maxDp[1 - row][0], maxDp[1 - row][1]) + Number(x);
          maxDp[row][1] =
            Math.max(maxDp[1 - row][0], maxDp[1 - row][1], maxDp[1 - row][2]) +
            Number(y);
          maxDp[row][2] =
            Math.max(maxDp[1 - row][1], maxDp[1 - row][2]) + Number(z);

          minDp[row][0] =
            Math.min(minDp[1 - row][0], minDp[1 - row][1]) + Number(x);
          minDp[row][1] =
            Math.min(minDp[1 - row][0], minDp[1 - row][1], minDp[1 - row][2]) +
            Number(y);
          minDp[row][2] =
            Math.min(minDp[1 - row][1], minDp[1 - row][2]) + Number(z);
          row = 1 - row;
        }
      });

      await events.once(rl, "close");

      // console.log("Reading file line by line with readline done.");
      // const used = process.memoryUsage().heapUsed / 1024 / 1024;
      // console.log(
      //   `The script uses approximately ${Math.round(used * 100) / 100} MB`
      // );

      console.log(Math.max(...maxDp[1 - row]), Math.min(...minDp[1 - row]));
    } catch (err) {
      console.error(err);
    }
  })();
}
