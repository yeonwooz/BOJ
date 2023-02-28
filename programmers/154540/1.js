function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const visited = Array.from(Array(n), () => Array(m).fill(0));

  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, 1, -1];

  const sums = [];
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (!visited[i][j] && maps[i][j] !== "X") {
        visited[i][j] = 1;
        BFS(i, j, +maps[i][j]);
      }
    }
  }

  return sums.length ? sums.sort() : [-1];

  function BFS(s, e, val) {
    const q = [];
    q.push([s, e, val]);
    let sum = 0;
    while (q.length) {
      let [i, j, k] = q.shift();
      sum += k;
      for (let idx = 0; idx < 4; ++idx) {
        const nr = dr[idx] + i;
        const nc = dc[idx] + j;

        if (
          0 <= nr &&
          nr < n &&
          0 <= nc &&
          nc < m &&
          !visited[nr][nc] &&
          maps[nr][nc] !== "X"
        ) {
          visited[nr][nc] = 1;
          q.push([nr, nc, parseInt(maps[nr][nc])]);
        }
      }
    }
    sums.push(sum);
  }
}
