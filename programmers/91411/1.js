/*
  긴 로직 작성할 때 정확도와 집중력이 떨어진다
  하나라도 제대로 풀기 위해서, 시간이 충분하다고 생각하고 긴 로직을 끝까지 작성하는 연습을 하자
  MinHeap 구현하기
*/

class MinHeap {
  constructor() {
    this.heap = [null]; // 최소힙이므로 부모가 자식보다 작아야 함
  }

  push(value) {
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
  const heap = new MinHeap(); // 우선순위 큐(힙)
  heap.push({ node: 1, cost: 0 }); // 1번 마을부터 시작

  const dist = [...Array(N + 1)].map(() => Infinity); // 계산하기 편하도록 N+1 길이만큼 리스트 생성
  dist[1] = 0; // 1번 마을은 무조건 거리가 0

  while (heap.heap.length > 1) {
    // heap이 비어있지 않다면
    // cost가 가장 낮은 정점을 뽑는다.
    const { node: current, cost: currentCost } = heap.pop();

    for (const [src, dest, cost] of road) {
      // 루프를 돌며 시작점, 도착점, 비용을 꺼낸다
      const nextCost = cost + currentCost; // 비용

      // 양방향을 고려하여 작성
      if (src === current && nextCost < dist[dest]) {
        // src가 현재 선택된 정점이면서 목적지까지 더 저렴할 경우
        dist[dest] = nextCost; // 거리를 갱신한다.
        heap.push({ node: dest, cost: nextCost }); // push
      } else if (dest == current && nextCost < dist[src]) {
        // dest가 현재 선택된 정점이면서 목적지까지 더 저렴할 경우
        dist[src] = nextCost; // 거리를 갱신한다.
        heap.push({ node: src, cost: nextCost }); // push
      }
    }
  }

  return dist; // 1번 마을부터 각 마을까지의 최단 거리
}
