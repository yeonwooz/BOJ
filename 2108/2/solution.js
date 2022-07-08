const inputs = getInputs();
const N = inputs.shift();
getReult(N, inputs);

function getInputs() {
  const fs = require("fs");
  const inputs = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n");
  return inputs.map((input) => parseInt(input));
}

function getReult(N, nums) {
  nums.sort((a, b) => a - b);

  console.log(mean(N, nums));
  console.log(median(N, nums));
  console.log(mode(nums));
  console.log(range(nums));
}

function mean(N, nums) {
  let mean = Math.round(nums.reduce((acc, num) => (acc += num), 0) / N);
  if (mean === -0) mean = 0;
  return mean;
}

function median(N, nums) {
  return nums[Math.floor(N / 2)];
}

function mode(nums) {
  const numCnts = new Map();
  for (let num of nums) {
    const cnt = numCnts.get(num);
    if (cnt) {
      numCnts.set(num, cnt + 1);
    } else {
      numCnts.set(num, 1);
    }
  }
  const mapToArr = Array.from(numCnts);
  mapToArr.sort((a, b) => b[1] - a[1]);
  if (mapToArr.length == 1) return mapToArr[0][0];
  if (mapToArr[0][1] > mapToArr[1][1]) return mapToArr[0][0];
  const max_cnt = mapToArr[0][1];
  const filtered = mapToArr.filter((item) => item[1] === max_cnt);
  filtered.sort((a, b) => a[0] < b[0]);
  return filtered[1][0];
}

function range(nums) {
  return nums[nums.length - 1] - nums[0];
}
