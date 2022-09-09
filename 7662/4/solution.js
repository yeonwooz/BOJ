main();

function main() {
  const [T, inputs] = getInputs();
  let head = 0;
  let idx = 0;
  while (idx < T) {
    // const k = inputs.shift();
    const k = Number(inputs[head]);
    let cmds = inputs.slice(head + 1, head + 1 + k);
    head += k + 1;
    solve(k, cmds);
    ++idx;
  }
}

function getInputs() {
  const fs = require("fs");
  const filepath =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
  const [T, ...inputs] = fs
    .readFileSync(filepath)
    .toString()
    .trim()
    .split("\n");
  return [Number(T), inputs];
}

function solve(k, cmds) {
  let minHeap = [0];
  let maxHeap = [0];
  for (let i = 0; i < k; ++i) {
    let [cmd, num] = cmds[i].split(" ");
    // console.log(cmd, num, ":");
    num = Number(num);
    switch (cmd) {
      case "I":
        insertMaxHeap(maxHeap, num);
        insertMinHeap(minHeap, num);
        break;
      case "D":
        if (num === 1) {
          while (maxHeap.length > 1 && !minHeap.includes(maxHeap[1])) {
            maxHeap.splice(1, 1);
          }
          if (maxHeap.length === 1) continue;
          let lastIdx = maxHeap.length - 1;
          maxHeap[1] = maxHeap[lastIdx];
          maxHeap.pop();
          maxHeapify(maxHeap, 1, lastIdx - 1);
        } else {
          while (minHeap.length > 1 && !maxHeap.includes(minHeap[1])) {
            minHeap.splice(1, 1);
          }
          if (minHeap.length === 1) continue;
          let lastIdx = minHeap.length - 1;
          minHeap[1] = minHeap[lastIdx];
          minHeap.pop();
          minHeapify(minHeap, 1, lastIdx - 1);
        }
        // --length;
        break;
      default:
        break;
    }
    // console.log("maxHeap", maxHeap, "minHeap", minHeap);
  }

  if (maxHeap.length === 1 || minHeap.length === 1) {
    console.log("EMPTY");
  } else {
    console.log(maxHeap[1], minHeap[1]);
  }
}

function insertMinHeap(heap, num) {
  heap.push(num);
  const length = heap.length;
  let idx = length - 1;
  while (idx >= 2) {
    const parentIdx = Math.floor(idx / 2);
    if (heap[parentIdx] > heap[idx]) {
      [heap[parentIdx], heap[idx]] = [heap[idx], heap[parentIdx]];
      idx /= 2;
      continue;
    }
    break;
  }
}

function insertMaxHeap(heap, num) {
  heap.push(num);
  const length = heap.length;
  let idx = length - 1;
  while (idx >= 2) {
    const parentIdx = Math.floor(idx / 2);
    if (heap[parentIdx] < heap[idx]) {
      [heap[parentIdx], heap[idx]] = [heap[idx], heap[parentIdx]];
      idx /= 2;
      continue;
    }
    break;
  }
}

function minHeapify(heap, start, idx) {
  let min_idx = start;
  let left = start * 2;
  let right = start * 2 + 1;

  if (
    left <= idx &&
    Math.min(heap[left], heap[right]) === heap[left] &&
    Math.min(heap[left], heap[start] === heap[left])
  ) {
    min_idx = left;
  }

  if (
    right <= idx &&
    Math.min(heap[left], heap[right]) === heap[right] &&
    Math.min(heap[right], heap[start] === heap[right])
  ) {
    min_idx = right;
  }

  if (min_idx !== start) {
    [heap[start], heap[min_idx]] = [heap[min_idx], heap[start]];
    minHeapify(heap, min_idx, idx);
  }
}

function maxHeapify(heap, start, idx) {
  let max_idx = start;
  let left = start * 2;
  let right = start * 2 + 1;

  if (
    left <= idx &&
    Math.max(heap[left], heap[right]) === heap[left] &&
    Math.max(heap[left], heap[start] === heap[left])
  ) {
    max_idx = left;
  }

  if (
    right <= idx &&
    Math.max(heap[left], heap[right]) === heap[right] &&
    Math.max(heap[right], heap[start] === heap[right])
  ) {
    max_idx = right;
  }

  if (max_idx !== start) {
    [heap[start], heap[max_idx]] = [heap[max_idx], heap[start]];
    maxHeapify(heap, max_idx, idx);
  }
}
