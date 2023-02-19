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
  // 인접행렬
  const board = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
  for (let [a, b, c] of road) {
    if (board[a][b]) board[a][b] = Math.min(board[a][b], c);
    else board[a][b] = c;

    if (board[b][a]) board[b][a] = Math.min(board[b][a], c);
    else board[b][a] = c;
  }
  // 비용배열
  const costs = Array(N + 1).fill(Infinity);
  costs[1] = 0;

  // 방문배열
  const visited = Array(N + 1).fill(0);

  // 큐
  let q = [];
  dijkstra(1);

  return costs.filter((x) => x <= K).length;

  function dijkstra(v) {
    visited[v] = 1;
    const minheap = new MinHeap();

    for (let next = 1; next <= N; ++next) {
      // next에 방문한 적 없고 popped -> next 서로 연결되어 있으면
      // 정점과 연결된 점들 모두 탐색하며 우선순위큐 생성
      if (!q.includes(next) && !visited[next] && board[v][next]) {
        costs[next] = Math.min(costs[next], costs[v] + board[v][next]);
        minheap.insert({
          nodeNum: next,
          cost: costs[next],
        });
      }
    }

    while (minheap.heap.length > 1) {
      q.push(minheap.pop()?.nodeNum);
    }

    if (q.length) {
      const popped = q.shift();
      dijkstra(popped);
    }
  }
}
