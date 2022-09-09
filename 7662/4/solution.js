main();

function main() {
  const [T, inputs] = getInputs();
  let head = 0;
  let idx = 0;
  let answer = [];
  while (idx < T) {
    const k = Number(inputs[head]);
    answer.push(solve(k, inputs.slice(head + 1, head + 1 + k)));
    head += k + 1;
    ++idx;
  }
  console.log(answer.join("\n"));
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
  let minHead = 1;
  let minTail = 1;
  let maxHeap = [0];
  let maxHead = 1;
  let maxTail = 1;
  let deleted = new Map();

  for (let i = 0; i < k; ++i) {
    let [cmd, num] = cmds[i].split(" ");
    num = Number(num);
    // console.log(cmd, num, ":");
    switch (cmd) {
      case "I":
        insertMaxHeap(maxHeap, num);
        ++maxTail;
        insertMinHeap(minHeap, num);
        ++minTail;
        const deletedLog = deleted.get(num);
        if (deletedLog) {
          if (deletedLog === 1) {
            deleted.delete(num);
          } else if (deletedLog > 1) {
            deleted.set(num, deletedLog - 1);
          }
        }
        break;
      case "D":
        if (num === 1) {
          while (maxHead < maxTail && deleted.get(maxHeap[maxHead])) {
            ++maxHead;
          }
          if (maxHead === maxTail) continue;
          if (deleted.get(maxHeap[maxHead])) {
            deleted.set(maxHeap[maxHead], deleted.get(maxHeap[maxHead] + 1));
          } else {
            deleted.set(maxHeap[maxHead], 1);
          }
          maxHeap[maxHead] = maxHeap[maxTail - 1];
          --maxTail;
          maxHeapify(maxHeap, maxHead, maxTail);
        } else {
          while (minHead < minTail && deleted.get(minHeap[minHead])) {
            ++minHead;
          }
          if (minHead === minTail) continue;
          if (deleted.get(minHeap[minHead])) {
            deleted.set(minHeap[minHead], deleted.get(minHeap[minHead] + 1));
          } else {
            deleted.set(minHeap[minHead], 1);
          }

          minHeap[minHead] = minHeap[minTail - 1];
          --minTail;
          minHeapify(minHeap, minHead, minTail);
        }
        break;
      default:
        break;
    }
    // console.log(
    //   "maxHeap",
    //   maxHeap,
    //   maxHead,
    //   maxTail,
    //   "minHeap",
    //   minHeap,
    //   minHead,
    //   minTail
    // );
  }

  if (minHead === minTail || maxHead === maxTail) {
    return "EMPTY";
  } else {
    return String(maxHeap[maxHead]) + " " + String(minHeap[minHead]);
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
