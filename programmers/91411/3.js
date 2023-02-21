// 길이 여러개일 수 있어서 union-find + kruskal 불가능

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  insert(value) {
    // 맨 끝에 삽입 후 위로 올라가며 힙정렬
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parentIdx = Math.floor(curIdx / 2);

    while (curIdx > 1) {
      // 부모노드가 더 크면 교체
      if (this.heap[parentIdx]?.cost > this.heap[curIdx].cost) {
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

  isEmpty() {
    return this.heap.length === 1;
  }

  heapify() {
    let curIdx = 1;
    let left = 2;
    let right = 3;
    // 자식중 부모보다 작은 게 있으면 교체
    while (
      this.heap[curIdx]?.cost > this.heap[left]?.cost ||
      this.heap[curIdx]?.cost > this.heap[right]?.cost
    ) {
      if (this.heap[curIdx] > this.heap[left]) {
        [this.heap[curIdx], this.heap[left]] = [
          this.heap[left],
          this.heap[curIdx],
        ];
        curIdx = left;
      } else {
        [this.heap[curIdx], this.heap[right]] = [
          this.heap[right],
          this.heap[curIdx],
        ];
        curIdx = right;
      }
      left = curIdx * 2;
      right = left + 1;
    }
  }
}

function solution(N, road, K) {
  const costs = dijkstra(N, road, K);
  return costs.filter((x) => x <= K).length;
}

function dijkstra(N, road, K) {
  road.sort((a, b) => a[2] - b[2]);
  const heap = new MinHeap();
  const costs = Array(N + 1).fill(Infinity);
  costs[1] = 0;
  heap.insert({
    node: 1,
    cost: 0,
  });

  while (!heap.isEmpty()) {
    const { node, cost } = heap.pop();

    for (const [start, dest, time] of road) {
      // 이번 경로가 costs[node] 와 연결되어있는지 확인
      if (start == node) {
        // 현재 노드에서 출발하는 최소시간 갱신
        costs[dest] = Math.min(costs[dest], cost + time);
      } else if (dest == node) {
        // 현재 노드에 도착하는 최소시간 갱신
        costs[start] = Math.min(costs[start], cost + time);
      } else {
        // 노드간 연결관계 파악 후 각 노드에 도착하는 최소시간 갱신
        costs[dest] = Math.min(costs[dest], costs[start] + time);
        costs[start] = Math.min(costs[start], costs[dest] + time);
      }
    }
  }

  return costs;
}
