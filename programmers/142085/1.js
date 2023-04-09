class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(v) {
    this.heap.push(v);
    let curIdx = this.heap.length - 1;
    let parentIdx = parseInt(curIdx / 2);

    while (curIdx > 1) {
      if (this.heap[parentIdx] < this.heap[curIdx]) {
        [this.heap[parentIdx], this.heap[curIdx]] = [
          this.heap[curIdx],
          this.heap[parentIdx],
        ];
        curIdx = parentIdx;
        parentIdx = parseInt(curIdx / 2);
      } else break;
    }
  }

  pop() {
    if (this.heap.length === 0) return null;
    let head = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.heapify();
    return head;
  }

  heapify() {
    let cur = 1;
    let l = 2;
    let r = 3;

    while (this.heap[cur] < this.heap[l] || this.heap[cur] < this.heap[r]) {
      if (this.heap[l] < this.heap[r]) {
        [this.heap[cur], this.heap[r]] = [this.heap[r], this.heap[cur]];
        cur = l;
      } else {
        [this.heap[cur], this.heap[l]] = [this.heap[l], this.heap[cur]];
        cur = r;
      }
      l = cur * 2;
      r = l + 1;
    }
  }

  isEmpty() {
    return this.heap.length === 1;
  }
}

function solution(n, k, enemy) {
  let totalRoundCnt = enemy.length;
  const heap = new MaxHeap();
  for (let i = 0; i < totalRoundCnt; ++i) {
    heap.push(enemy[i]);
  }

  let roundCnt = 0;
  while (n > 0) {
    const curEnemyCnt = heap.pop();
    if (k > 0) {
      k--;
      roundCnt++;
      continue;
    }
    if (n >= curEnemyCnt) {
      n -= curEnemyCnt;
      roundCnt++;
    } else {
      heap.push(curEnemyCnt);
      break;
    }
  }
  if (n === 0) return totalRoundCnt;
  return roundCnt;
}
