class MinHeap {
  constructor() {
    this.heap = [null]; // 최소힙이므로 부모가 자식보다 작아야 함
  }

  push(value) {
    this.heap.push(value);
    let childIdx = this.heap.length - 1;
    let parentIdx = Math.floor(childIdx / 2);
    while (childIdx > 1) {
      if (this.heap[parentIdx][1] > this.heap[childIdx][1]) {
        [this.heap[parentIdx], this.heap[childIdx]] = [
          this.heap[childIdx],
          this.heap[parentIdx],
        ];
      }
      childIdx = parentIdx;
      parentIdx = Math.floor(childIdx / 2);
    }
  }

  pop() {
    if (this.heap.length <= 1) return null;
    if (this.heap.length === 2) return this.heap.pop();
    const topValue = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.heapify();
    return topValue;
  }

  heapify() {
    let curIdx = 1;
    let left = 2;
    let right = 3;

    while (
      (this.heap[curIdx] &&
        this.heap[curIdx][1] > this.heap[right] &&
        this.heap[right][1]) ||
      (this.heap[curIdx] &&
        this.heap[curIdx][1] > this.heap[left] &&
        this.heap[left][1])
    ) {
      if (this.heap[left][1] > this.heap[right][1]) {
        [this.heap[curIdx], this.heap[right]] = [
          this.heap[right],
          this.heap[curIdx],
        ];
        curIdx = right;
      } else {
        [this.heap[curIdx], this.heap[left]] = [
          this.heap[left],
          this.heap[curIdx],
        ];
        curIdx = left;
      }

      left = curIdx * 2;
      right = left + 1;
    }
  }

  size() {
    return this.heap.length - 1;
  }

  isEmpty() {
    return this.heap.length === 1;
  }
}

function solution(jobs) {
  const heap = new MinHeap();
  const count = jobs.length;
  jobs.sort((a, b) => a[0] - b[0]);

  let time = 0;
  let complete = 0;
  let total = 0;

  while (jobs.length || !heap.isEmpty()) {
    while (jobs.length) {
      if (jobs[0][0] === time) {
        heap.push(jobs.shift());
      } else break;
    }

    if (!heap.isEmpty() && time >= complete) {
      const task = heap.pop();
      complete = task[1] + time;
      total += complete - task[0];
    }
    time++;
  }
  return Math.floor(total / count);
}
