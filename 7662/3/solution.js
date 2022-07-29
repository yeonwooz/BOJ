let max_heap = [];
let mxh_idx = 0;
let min_heap = [];
let mnh_idx = 0;
let deleted = [];

main();

function main() {
  const arrs = init();
  for (let i = 0; i < arrs.length; ++i) {
    max_heap = [];
    mxh_idx = 0;
    min_heap = [];
    mnh_idx = 0;
    deleted = [];
    solve(arrs[i]);
  }
}

function init() {
  const fs = require("fs");
  const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

  let [T, ...inputs] = fs.readFileSync(path).toString().trim().split("\n");
  T = parseInt(T);
  let arr = new Array(T);
  for (let i = 0; i < T; ++i) {
    arr[i] = [];
  }
  let idx = 0;
  let i = 0;
  while (i < inputs.length) {
    if (inputs[i].length === 1) {
      for (let j = i + 1; j <= i + parseInt(inputs[i]); ++j) {
        arr[idx].push(inputs[j]);
      }
      i = i + parseInt(inputs[i]) + 1;
      ++idx;
    } else ++i;
  }
  return arr;
}

function solve(commands) {
  id = 1;
  for (let i = 0; i < commands.length; ++i) {
    let [cmd, n] = commands[i].split(" ");
    n = parseInt(n);
    switch (cmd) {
      case "I":
        const data = { id: id, value: n };
        ++id;
        ++mxh_idx;
        max_heap[mxh_idx] = data;
        max_sync(mxh_idx);

        ++mnh_idx;
        min_heap[mnh_idx] = data;
        min_sync(mnh_idx);
        break;

      case "D":
        if (mxh_idx === 0 || mnh_idx === 0) continue;
        if (n === 1) {
          const max_data = max_heap[1];
          const foundIndex = deleted.findIndex((id) => id === max_data.id);
          if (foundIndex >= 0) continue;
          deleted.push(max_data.id);
          max_heap[1] = max_heap[mxh_idx];
          max_heap.pop();
          max_heapify(1, mxh_idx);
          mxh_idx--;
        } else if (n === -1) {
          const min_data = min_heap[1];
          const foundIndex = deleted.findIndex((id) => id === min_data.id);
          if (foundIndex >= 0) continue;
          deleted.push(min_data.id);
          min_heap[1] = min_heap[mnh_idx];
          min_heap.pop();
          min_heapify(1, mnh_idx);
          mnh_idx--;
        }
        break;
    }
    sync_heaps();
  }

  if (mxh_idx === 0 || mnh_idx === 0) console.log("EMPTY");
  else console.log(max_heap[1].value + " " + min_heap[1].value);
}

function max_sync(idx) {
  let temp_idx = idx;
  while (temp_idx >= 2) {
    let parent_idx = Math.floor(temp_idx / 2);
    const parent = max_heap[parent_idx];
    const child = max_heap[temp_idx];
    if (child.value > parent.value) {
      max_heap[parent_idx] = child;
      max_heap[temp_idx] = parent;
      temp_idx = Math.floor(temp_idx / 2);
      continue;
    }
    break;
  }
}

function min_sync(idx) {
  let temp_idx = idx;
  while (temp_idx >= 2) {
    let parent_idx = Math.floor(temp_idx / 2);
    const parent = min_heap[parent_idx];
    const child = min_heap[temp_idx];

    if (child.value < parent.value) {
      min_heap[parent_idx] = child;
      min_heap[temp_idx] = parent;
      temp_idx = Math.floor(temp_idx / 2);
      continue;
    }
    break;
  }
}
function max_heapify(start, idx) {
  const left = start * 2;
  const right = start * 2 + 1;
  let max_idx = start;

  if (
    left < idx &&
    right >= idx &&
    Math.max(max_heap[left].value, max_heap[start].value) ===
      max_heap[left].value
  )
    max_idx = left;

  if (
    right < idx &&
    Math.max(max_heap[left].value, max_heap[right].value) ===
      max_heap[right].value &&
    Math.max(max_heap[right].value, max_heap[start].value) ===
      max_heap[right].value
  )
    max_idx = right;

  if (max_idx != start) {
    let temp = max_heap[start];
    max_heap[start] = max_heap[max_idx];
    max_heap[max_idx] = temp;
    max_heapify(max_idx, idx);
  }
}

function min_heapify(start, idx) {
  const left = start * 2;
  const right = start * 2 + 1;
  let min_idx = start;

  if (
    left < idx &&
    right >= idx &&
    Math.min(min_heap[left].value, min_heap[start].value) ===
      min_heap[left].value
  )
    min_idx = left;

  if (
    right < idx &&
    Math.min(min_heap[left].value, min_heap[right].value) ===
      min_heap[right].value &&
    Math.min(min_heap[right].value, min_heap[start].value) ===
      min_heap[right].value
  )
    min_idx = right;

  if (min_idx != start) {
    let temp = min_heap[start];
    min_heap[start] = min_heap[min_idx];
    min_heap[min_idx] = temp;
    min_heapify(min_idx, idx);
  }
}

function sync_heaps() {
  for (let i = 0; i < deleted.length; ++i) {
    let cnt = 0;
    for (let j = mxh_idx; j >= 1; --j) {
      if (max_heap[j].id === deleted[i]) {
        max_heap.splice(j, 1);
        ++cnt;
      }
    }
    mxh_idx -= cnt;
    cnt = 0;
    for (let j = mnh_idx; j >= 1; --j) {
      if (min_heap[j].id === deleted[i]) {
        min_heap.splice(j, 1);
        ++cnt;
      }
    }
    mnh_idx -= cnt;
  }
}
