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
    const heap = [];
    costs[0][0] = 1;
    visited[0][0] = 1;
    heap.push({ i: 0, j: 0, cost: 1 });

    let cnt = 0;
    while (heap.length) {
      const { i, j, cost } = heap.shift();

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
