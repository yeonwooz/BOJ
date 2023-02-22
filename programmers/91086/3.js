// 자동 정렬되는 최대힙에서 하나씩 pop시켜서 처리

class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    // 맨 마지막에 넣고, 위로 올라가면서 부모가 더 작다면 교체
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parentIdx = Math.floor(curIdx / 2);
    while (curIdx > 1) {
      if (this.heap[parentIdx] < this.heap[curIdx]) {
        [this.heap[parentIdx], this.heap[curIdx]] = [
          this.heap[curIdx],
          this.heap[parentIdx],
        ];
        curIdx = parentIdx;
        parentIdx = Math.floor(curIdx / 2);
      } else break;
    }
  }

  pop() {
    if (this.isEmpty()) return null;
    if (this.heap.length === 2) return this.heap.pop();
    const top = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.heapify();
    return top;
  }

  heapify() {
    let curIdx = 1;
    let left = 2;
    let right = 3;

    while (
      this.heap[curIdx] < this.heap[right] ||
      this.heap[curIdx] < this.heap[left]
    ) {
      if (this.heap[left] < this.heap[right]) {
        // cur 말고 left  right 비교하는 것임!!
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

  isEmpty() {
    return this.heap.length === 1;
  }
}

function solution(no, works) {
  const heap = new MaxHeap();
  let sumTask = 0;
  for (let task of works) {
    heap.push(task);
    sumTask += task;
  }
  if (sumTask <= no) return 0;

  while (!heap.isEmpty() && no > 0) {
    const popped = heap.pop();
    if (popped > 1) {
      heap.push(popped - 1);
    }
    no--;
  }

  return heap.heap.reduce((prev, cur) => prev + cur ** 2, 0);
}
