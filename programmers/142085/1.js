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
  let s = 0;
  let e = enemy.length;
  let mid = parseInt(s + e); // 몇번째 라운드에서 끝날까?
  let answer = 0;
  while (s < e) {
    // mid번째 라운드에서 끝나는 것이 가능할까?
    const heap = new MaxHeap();
    for (let i = 0; i <= mid; ++i) {
      heap.push(enemy[i]);
    }
    while (!heap.isEmpty() && n > 0) {
      const popped = heap.pop();
      if (k > 0) {
        k--;
        continue;
      }
      n -= popped;
    }

    if (n <= 0) {
      // 더 진행해볼수도? -> mid 올려보기
      answer = Math.max(answer, mid);
      s = mid + 1;
    } else {
      // mid 낮춰야 함
      e = mid;
    }
    mid = parseInt(s + e);
  }

  return answer;
}
