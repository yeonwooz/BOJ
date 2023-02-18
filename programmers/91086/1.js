class MaxHeap {
  constructor() {
    this.heap = [null]; // 0번째 인덱스 안 씀
    this.root = 1;
    this.tail = 1;
  }

  push(value) {
    let curIdx = this.tail;
    this.heap[curIdx] = value;
    let parentIdx = Math.floor(curIdx / 2);

    while (curIdx > this.root) {
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
    }
    this.tail++;
  }

  pop() {
    if (this.tail === 1) return null;
    const popped = this.heap[this.root];
    this.heap[1] = this.heap[this.tail];
    delete this.heap[this.tail];
    this.heapify();
    this.root++;
    return popped;
  }

  heapify() {
    // 루트부터 끝까지 재정렬
    let rootIdx = this.root;

    while (rootIdx <= this.tail) {
      let leftIdx = rootIdx * 2;
      let rightIdx = leftIdx + 1;
      let maxNodeIdx = rootIdx;
      let newRootIdx = this.tail * 2;
      // 왼쪽자식이 없을 때 => 종료
      if (!this.heap[leftIdx]) break;

      // 오른쪽 자식이 없거나, 둘다 있고 왼쪽자식이 오른쪽 자식보다 크거나 같을 때 => 왼쪽서브트리 선택해서 비교
      if (!this.heap[rightIdx] || this.heap[leftIdx] >= this.heap[rightIdx]) {
        // 현재루트와 left노드 비교
        if (this.heap[maxNodeIdx] < this.heap[leftIdx]) {
          maxNodeIdx = leftIdx;
          newRootIdx = leftIdx;
        }
      }

      // 오른쪽자식이 존재하고 왼쪽보다 오른쪽이 클 때 => 오른쪽서브트리 선택해서 비교
      if (this.heap[rightIdx] && this.heap[leftIdx] < this.heap[rightIdx]) {
        // 현재루트와 right노드 비교
        if (this.heap[maxNodeIdx] < this.heap[rightIdx]) {
          maxNodeIdx = rightIdx;
          newRootIdx = rightIdx;
        }
      }

      // rootIdx = 자식 둘 중 값이 존재하고, 더 큰것
      // maxNodeIdx !== rootIdx 이면 스왑
      if (this.heap[maxNodeIdx] != this.heap[rootIdx]) {
        [this.heap[maxNodeIdx], this.heap[rootIdx]] = [
          this.heap[rootIdx],
          this.heap[maxNodeIdx],
        ];
      }

      rootIdx = newRootIdx;
    }
  }
}

function solution(n, works) {
  let t = 0;
  const len = works.length;
  const heap = new MaxHeap();
  for (let i = 0; i < len; ++i) {
    heap.push(works[i]);
  }

  while (t < n) {
    const popped = heap.pop();
    heap.push(popped - 1);
    t++;
  }

  const start = Math.max(heap.length - len, 0);

  let s = heap.root;
  let e = heap.tail;
  let answer = 0;
  while (s < e) {
    const popped = heap.pop();
    answer += popped ** 2;
    ++s;
  }
  return answer;
}
