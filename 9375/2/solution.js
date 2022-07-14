const inputs = getInputs();
const T = parseInt(inputs.shift());
for (let i = 0; i < T; ++i) {
  solve(inputs);
}

function getInputs() {
  const fs = require("fs");
  const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const inputs = fs.readFileSync(filepath).toString().trim().split("\n");
  return inputs;
}

function solve(inputs) {
  let clomap = new Map();
  let cnt = parseInt(inputs.shift());

  while (cnt > 0) {
    const info = inputs[0].split(" ");
    const type = info[1];
    inputs.shift();

    if (!clomap.get(type)) {
      clomap.set(type, 1);
    } else {
      clomap.set(type, clomap.get(type) + 1);
    }
    --cnt;
  }
  const mapArr = Array.from(clomap.entries());
  let cmb = 1;
  for (let i = 0; i < mapArr.length; ++i) {
    cmb *= mapArr[i][1] + 1;
  }
  cmb -= 1;
  console.log(cmb);
}
