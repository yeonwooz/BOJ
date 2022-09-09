main();

function main() {
  const word = getInputs();
  solve(word);
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  const word = fs.readFileSync(filepath).toString().trim();
  return word;
}

function solve(word) {
  let time = 0;
  for (let i = 0; i < word.length; ++i) {
    let alpha = word[i];
    if ("A" <= alpha && alpha <= "C") {
      time += 3;
    } else if ("D" <= alpha && alpha <= "F") {
      time += 4;
    } else if ("G" <= alpha && alpha <= "I") {
      time += 5;
    } else if ("J" <= alpha && alpha <= "L") {
      time += 6;
    } else if ("M" <= alpha && alpha <= "O") {
      time += 7;
    } else if ("P" <= alpha && alpha <= "S") {
      time += 8;
    } else if ("T" <= alpha && alpha <= "V") {
      time += 9;
    } else if ("W" <= alpha && alpha <= "Z") {
      time += 10;
    }
  }
  console.log(time);
}
