/*
  긴 로직 작성할 때 정확도와 집중력이 떨어진다
  하나라도 제대로 풀기 위해서, 시간이 충분하다고 생각하고 긴 로직을 끝까지 작성하는 연습을 하자
  MinHeap 구현하기
*/

class MinHeap {
  constructor() {
    this.heap = [null]; // 최소힙이므로 부모가 자식보다 작아야 함
  }

  insert(value) {
    this.heap.push(value);
    let childIdx = this.heap.length - 1;
    let parentIdx = Math.floor(childIdx / 2);
    while (childIdx > 1) {
      if (this.heap[parentIdx].cost > this.heap[childIdx].cost) {
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
    // 부모가 자식보다 작도록 전체 재정렬
    let curIdx = 1;
    let leftIdx = 2;
    let rightIdx = 3;

    while (
      this.heap[curIdx]?.cost > this.heap[leftIdx]?.cost ||
      this.heap[curIdx]?.cost > this.heap[rightIdx]?.cost
    ) {
      if (this.heap[leftIdx]?.cost > this.heap[rightIdx]?.cost) {
        [this.heap[curIdx], this.heap[rightIdx]] = [
          this.heap[rightIdx],
          this.heap[curIdx],
        ];
        curIdx = rightIdx;
      } else {
        [this.heap[curIdx], this.heap[leftIdx]] = [
          this.heap[leftIdx],
          this.heap[curIdx],
        ];
        curIdx = leftIdx;
      }

      leftIdx = curIdx * 2;
      rightIdx = leftIdx + 1;
    }
  }
}

function solution(N, road, K) {
  const dist = dijkstra(road, N);
  return dist.filter((x) => x <= K).length;
}

function dijkstra(road, N) {
  const costs = Array(N + 1).fill(Infinity);
  costs[1] = 0;
  const heap = new MinHeap();
  heap.insert({ nodeNum: 1, cost: 0 });

  while (heap.heap.length > 1) {
    // const {curNodeNum, curCost} = heap.pop()
    const popped = heap.pop();
    const curNodeNum = popped.nodeNum;
    const curCost = popped.cost;

    for (let [start, dest, cost] of road) {
      const newCost = curCost + cost;
      if (start === curNodeNum && newCost < costs[dest]) {
        // 현재지점에서 시작해서 dest로 가는 비용을 더 적게 갱신할 수 있는 상황
        costs[dest] = newCost;
        heap.insert({ nodeNum: dest, cost: newCost });
      } else if (dest === curNodeNum && newCost < costs[start]) {
        // 반대방향으로 가면서 비용을 갱신할 수 있는 상황
        costs[start] = newCost;
        heap.insert({ nodeNum: start, cost: newCost });
      }
    }
  }

  return costs;
}
