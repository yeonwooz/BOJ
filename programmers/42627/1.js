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
    const min = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    if (!this.heap[leftIdx]) return min;
    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx][1] < this.heap[curIdx][1]) {
        [this.heap[leftIdx], this.heap[curIdx]] = [
          this.heap[curIdx],
          this.heap[leftIdx],
        ];
      }
      return min;
    }

    while (
      this.heap[leftIdx][1] < this.heap[curIdx][1] ||
      this.heap[rightIdx][1] < this.heap[curIdx][1]
    ) {
      const minIdx =
        this.heap[leftIdx][1] > this.heap[rightIdx][1] ? rightIdx : leftIdx;
      [this.heap[minIdx], this.heap[curIdx]] = [
        this.heap[curIdx],
        this.heap[minIdx],
      ];
      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;

      if (leftIdx >= this.size()) break;
    }

    return min;
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
