function solution(n, m, x, y, r, c, k) {
  const board = Array(n)
    .fill()
    .map(() => Array(m).fill(0));
  const memoBoard = Array(n)
    .fill()
    .map(() => Array(m).fill(""));

  // S: x-1, y-1
  // E: r-1, c-1
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let done = false;

  function DFS(cur_x, cur_y, dist, cur_route) {
    if (dist === k) {
      if (cur_x === r - 1 && cur_y === c - 1) done = true;
      return;
    }
    memoBoard[cur_x][cur_y] = cur_route;

    for (let i = 0; i < 4; ++i) {
      const next_x = cur_x + dx[i];
      const next_y = cur_y + dy[i];

      if (next_x < 0 || next_x >= n || next_y < 0 || next_y >= m) continue;

      if (memoBoard[next_x][next_y] <= memoBoard[cur_x][cur_y]) {
        if (i === 0) cur_route += "u";
        if (i === 1) cur_route += "r";
        if (i === 2) cur_route += "d";
        if (i === 3) cur_route += "l";
        dist++;

        const cur_memo = memoBoard[cur_x][cur_y];
        const next_memo = DFS(next_x, next_y, dist, cur_route);
        memoBoard[cur_x][cur_y] = cur_memo < next_memo ? cur_memo : next_memo;
      }
    }
    return cur_route;
  }

  DFS(x - 1, y - 1, 0, "");

  return done ? memoBoard[r - 1][c - 1] : "impossible";
}
