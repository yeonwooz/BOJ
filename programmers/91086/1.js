class MaxHeap {
  constructor() {
    this.heap = [null]; // 0번째 인덱스 안 씀
  }

  push(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parentIdx = Math.floor(curIdx / 2);

    while (curIdx > 1) {
      // 부모보다 자식이 크면 교체
      if (this.heap[curIdx] > this.heap[parentIdx]) {
        [this.heap[curIdx], this.heap[parentIdx]] = [
          this.heap[parentIdx],
          this.heap[curIdx],
        ];
      } else {
        break;
      }
      curIdx = parentIdx;
      parentIdx = Math.floor(curIdx / 2);
    }
  }

  pop() {
    if (this.heap.length <= 1) return null;
    if (this.heap.length === 2) {
      return this.heap.pop();
    }
    const popped = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.heapify();
    return popped;
  }

  heapify() {
    // 루트부터 끝까지 재정렬
    let rootIdx = 1;
    let leftIdx = rootIdx * 2;
    let rightIdx = leftIdx + 1;

    while (
      this.heap[rootIdx] < this.heap[leftIdx] ||
      this.heap[rootIdx] < this.heap[rightIdx]
    ) {
      // 오른쪽자식이 존재하고 왼쪽보다 오른쪽이 클 때 => 오른쪽서브트리 선택해서 비교
      if (this.heap[rightIdx] && this.heap[leftIdx] < this.heap[rightIdx]) {
        // 현재루트와 right노드 비교
        if (this.heap[rootIdx] < this.heap[rightIdx]) {
          [this.heap[rightIdx], this.heap[rootIdx]] = [
            this.heap[rootIdx],
            this.heap[rightIdx],
          ];
          rootIdx = rightIdx;
        }
      }

      // 오른쪽 자식이 없거나, 둘다 있고 왼쪽자식이 오른쪽 자식보다 크거나 같을 때 => 왼쪽서브트리 선택해서 비교
      else {
        // 현재루트와 left노드 비교
        if (this.heap[rootIdx] < this.heap[leftIdx]) {
          [this.heap[leftIdx], this.heap[rootIdx]] = [
            this.heap[rootIdx],
            this.heap[leftIdx],
          ];
          rootIdx = leftIdx;
        }
      }

      leftIdx = rootIdx * 2;
      rightIdx = leftIdx + 1;
    }
  }
}

function solution(n, works) {
  if (works.reduce((a, b) => a + b) <= n) {
    return 0;
  }

  let t = 0;
  const len = works.length;
  const heap = new MaxHeap();
  for (let i = 0; i < len; ++i) {
    heap.push(works[i]);
  }

  for (let i = 0; i < n; i += 1) {
    heap.push(heap.pop() - 1);
  }

  return heap.heap.reduce((a, b) => a + b ** 2, 0);
}
