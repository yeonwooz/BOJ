function solution(game_board, table) {
  const n = game_board.length;
  const dr = [1, -1, 0, 0];
  const dc = [0, 0, -1, 1];
  const boardVisited = Array.from(Array(n), () => Array(n).fill(0));
  const boardRoutes = [];

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      if (game_board[i][j] || boardVisited[i][j]) continue;
      boardRoutes.push(boardDFS(i, j, []));
    }
  }
  console.log("boardRoutes", boardRoutes);

  const tableVisited = Array.from(Array(n), () => Array(n).fill(0));
  const puzzles = [];
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      if (!table[i][j] || tableVisited[i][j]) continue;
      puzzles.push(tableDFS(i, j, []));
    }
  }
  console.log("puzzles", puzzles);

  function boardDFS(i, j, path) {
    boardVisited[i][j] = 1;
    path.push([i, j]);
    for (let idx = 0; idx < 4; ++idx) {
      const nr = dr[idx] + i;
      const nc = dc[idx] + j;
      if (
        0 <= nr &&
        nr < n &&
        0 <= nc &&
        nc < n &&
        !boardVisited[nr][nc] &&
        !game_board[nr][nc]
      ) {
        boardDFS(nr, nc, path);
      }
    }
    return path;
  }

  function tableDFS(i, j, path) {
    tableVisited[i][j] = 1;
    path.push([i, j]);
    for (let idx = 0; idx < 4; ++idx) {
      const nr = dr[idx] + i;
      const nc = dc[idx] + j;
      if (
        0 <= nr &&
        nr < n &&
        0 <= nc &&
        nc < n &&
        !tableVisited[nr][nc] &&
        table[nr][nc]
      ) {
        tableDFS(nr, nc, path);
      }
    }
    return path;
  }
}
