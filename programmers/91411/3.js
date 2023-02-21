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
    // 오른쪽 먼저 비교해야 undefined오류 방어 쉬움
    let curIdx = 1;
    let left = 2;
    let right = 3;
    // 자식중 부모보다 작은 게 있으면 교체
    while (
      this.heap[curIdx]?.cost > this.heap[left]?.cost ||
      this.heap[curIdx]?.cost > this.heap[right]?.cost
    ) {
      if (this.heap[curIdx] > this.heap[right]) {
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
}

function solution(N, road, K) {
  const costs = dijkstra(N, road);
  return costs.filter((x) => x <= K).length;
}

function dijkstra(N, road) {
  // road.sort((a,b) => a[2] - b[2]) // 불필요
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
      const newCost = cost + time;
      // 이번 경로가 costs[node] 와 연결되어있는지 확인
      if (start == node && newCost < costs[dest]) {
        // 현재 노드에서 출발하는 최소시간 갱신
        costs[dest] = newCost;
        heap.insert({
          node: dest,
          cost: newCost,
        });
      } else if (dest == node && newCost < costs[start]) {
        // 현재 노드에 도착하는 최소시간 갱신
        costs[start] = newCost;
        heap.insert({
          node: start,
          cost: newCost,
        });
      }
    }
  }

  return costs;
}
