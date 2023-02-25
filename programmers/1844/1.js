class MinHeap {
  constructor() {
    this.heap = [null]; // {i,j,cost}
  }

  push(val) {
    this.heap.push(val); // 맨 끝에 넣고, 위로 올라가면서 부모가 더 크면 교체
    let curIdx = this.heap.length - 1;
    let parentIdx = Math.floor(curIdx / 2);
    while (curIdx > 1) {
      if (this.heap[curIdx]?.cost < this.heap[parentIdx]?.cost) {
        [this.heap[curIdx], this.heap[parentIdx]] = [
          this.heap[parentIdx],
          this.heap[curIdx],
        ];
        curIdx = parentIdx;
        parentIdx = Math.floor(curIdx / 2);
      } else break;
    }
  }

  pop() {
    // 맨 위를 빼고 맨 아래꺼를 위로 올린 후에, 각 부모에 대해서 자식 중 하나가 더 작다면 좌우 비교하며 더작은쪽과 교체
    if (this.isEmpty()) return null;
    if (this.heap.length === 2) return this.heap.pop();
    const popped = this.heap.pop();
    this.heap[1] = popped;
    this.heapify();
    return popped;
  }

  heapify() {
    let curIdx = 1;
    let left = 2;
    let right = 3;
    while (
      this.heap[curIdx]?.cost > this.heap[right]?.cost ||
      this.heap[curIdx]?.cost > this.heap[left]?.cost
    ) {
      if (this.heap[left]?.cost > this.heap[right]?.cost) {
        [this.heap[right], this.heap[curIdx]] = [
          this.heap[curIdx],
          this.heap[right],
        ];
        curIdx = right;
      } else {
        [this.heap[left], this.heap[curIdx]] = [
          this.heap[curIdx],
          this.heap[left],
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

function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const visited = Array.from(Array(n), () => Array(m).fill(0));
  const costs = Array.from(Array(n), () => Array(m).fill(Infinity));

  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];

  BFS();

  const lastCost = costs[n - 1][m - 1];
  return lastCost === Infinity ? -1 : lastCost;

  function BFS() {
    const heap = new MinHeap();
    costs[0][0] = 1;
    visited[0][0] = 1;
    heap.push({ i: 0, j: 0, cost: 1 });

    let cnt = 0;
    while (!heap.isEmpty()) {
      const { i, j, cost } = heap.pop();

      for (let idx = 0; idx < 4; ++idx) {
        const nr = dr[idx] + i;
        const nc = dc[idx] + j;

        if (
          0 <= nr &&
          nr < n &&
          0 <= nc &&
          nc < m &&
          visited[nr][nc] === 0 &&
          maps[nr][nc] === 1
        ) {
          costs[nr][nc] = Math.min(costs[nr][nc], costs[i][j] + 1);
          visited[nr][nc] = 1;
          heap.push({ i: nr, j: nc, cost: costs[nr][nc] });
        }
      }
      cnt++;
    }
  }
}
