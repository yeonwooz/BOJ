function solution(game_board, table) {
  const n = game_board.length;
  const dr = [1, -1, 0, 0];
  const dc = [0, 0, -1, 1];
  const visited = Array.from(Array(n), () => Array(n).fill(0));

  let answer = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      if (game_board[i][j] || visited[i][j]) continue;
      const route = DFS(i, j, []);
      console.log(i, j, "에서 시작 =>", route);
    }
  }

  function DFS(i, j, path) {
    visited[i][j] = 1;
    path.push([i, j]);
    for (let idx = 0; idx < 4; ++idx) {
      const nr = dr[idx] + i;
      const nc = dc[idx] + j;
      if (
        0 <= nr &&
        nr < n &&
        0 <= nc &&
        nc < n &&
        !visited[nr][nc] &&
        !game_board[nr][nc]
      ) {
        DFS(nr, nc, path);
      }
    }
    return path;
  }
}
