class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(v) {
    this.heap.push(v);
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
    if (this.isEmpty()) return null;
    if (this.heap.length === 2) return this.heap.pop();
    const top = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.heapify();
    return top;
  }

  heapify() {
    let curIdx = 1;
    let left = 2;
    let right = 3;

    while (
      this.heap[curIdx]?.cost > this.heap[right]?.cost ||
      this.heap[curIdx]?.cost > this.heap[left]?.cost
    ) {
      if (this.heap[curIdx]?.cost > this.heap[right]?.cost) {
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

  isEmpty() {
    return this.heap.length === 1;
  }
}

function solution(maps) {
  /*
    L->S, L->E 경로가 존재하지 않으면 -1
    존재하면 L->S + L->E
    */
  let S = [];
  let E = [];
  let L = [];
  const visited1 = Array.from(Array(maps.length), () => []);
  const visited2 = Array.from(Array(maps.length), () => []);
  for (let i = 0; i < maps.length; ++i) {
    // 지도 스캔
    visited1[i] = Array(maps[i].length).fill(0);
    visited2[i] = Array(maps[i].length).fill(0);
    for (let j = 0; j < maps[i].length; ++j) {
      if (maps[i][j] === "S") S = [i, j];
      if (maps[i][j] === "E") E = [i, j];
      if (maps[i][j] === "L") L = [i, j];
    }
  }

  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];
  let startToLeverTime = 10001;
  let leverToExitTime = 10001;

  function BFS(v, dest, time, visited) {
    const heap = new MinHeap();
    visited[v[0]][v[1]] = 1;
    heap.push({
      node: v, // 레버의 [i,j]
      cost: time,
    });

    while (!heap.isEmpty()) {
      const { node, cost } = heap.pop();
      const [i, j] = node;
      if (dest === "s") {
        if (i === S[0] && j === S[1]) {
          startToLeverTime = Math.min(startToLeverTime, cost);
          break;
        }
      } else if (dest === "e") {
        if (i === E[0] && j === E[1]) {
          leverToExitTime = Math.min(leverToExitTime, cost);
          break;
        }
      }

      for (let idx = 0; idx < 4; ++idx) {
        const nx = i + dx[idx];
        const ny = j + dy[idx];
        if (
          0 <= nx &&
          nx < maps.length &&
          0 <= ny &&
          ny < maps[0].length &&
          !visited[nx][ny] &&
          maps[nx][ny] !== "X"
        ) {
          visited[nx][ny] = 1;
          heap.push({
            node: [nx, ny],
            cost: cost + 1,
          });
        }
      }
    }
  }

  BFS(L, "s", 0, visited1);
  if (startToLeverTime === 10001) return -1;
  BFS(L, "e", 0, visited2);
  if (leverToExitTime === 10001) return -1;
  return startToLeverTime + leverToExitTime;
}
