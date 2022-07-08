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
  let sum = 0;
  let min = 4000;
  let max = -4000;
  for (let i = 0; i < N; ++i) {
    sum += nums[i];
    if (min > nums[i]) min = nums[i];
    if (max < nums[i]) max = nums[i];
  }
  nums.sort();

  console.log(mean(N, sum));
  console.log(median(N, nums));
  console.log(mode(N, nums, max));
  console.log(range(min, max));
}

function mean(N, sum) {
  let mean = sum / N;
  if (sum >= 0) {
    mean = Math.round(mean);
  } else {
    if (mean - Math.ceil(mean) <= -0.5 && mean - Math.ceil(mean) > -0.6) mean = Math.round(mean) - 1;
    else mean = Math.round(mean);
  }
  if (mean == -0) mean = 0;
  return mean;
}

function median(N, nums) {
  return nums[Math.floor(N / 2)];
}

function mode(N, nums, max) {
  const cnts = Array(8001).fill(0);
  for (let i = 0; i < N; ++i) {
    cnts[nums[i] + 4000]++;
  }

  let max_cnt = 0;
  let min1 = -4001;
  let min2 = -4002;
  for (let i = 0; i <= max + 4000; ++i) {
    if (max_cnt < cnts[i]) {
      max_cnt = cnts[i];
      min1 = i - 4000;
      min2 = -4001;
    } else if (max_cnt == cnts[i]) {
      if (min2 == -4001) {
        min2 = i - 4000;
      } else {
        if (i - 4000 < min1 && min1 < min2) {
          min1 = i - 4000;
          min2 = min1;
        } else if (min1 > i - 4000 && i - 4000 < min2) {
          min2 = i - 4000;
        }
      }
    }
  }
  if (min2 == -4001) return min1;
  return min2;
}

function range(min, max) {
  return max - min;
}
