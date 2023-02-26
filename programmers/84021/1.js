function solution(game_board, table) {
  const n = game_board.length;
  const dr = [1, -1, 0, 0];
  const dc = [0, 0, -1, 1];
  const visited = Array.from(Array(n), () => Array(n).fill(0));

  let answer = 0;

  // 보드에서 시작점 찾기
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      if (!game_board[i][j]) continue;

      // 시작점 i, j
      visited[i][j] = 1;
      searchTable([[i, j]]); // table의 특정지점과 평행이동으로 끝까지 갈 수 있는지
      visited[i][j] = 0;
    }
  }
  return answer;

  function searchTable(boardPath) {
    // 테이블에서 시작점 찾기
    for (let i = 0; i < n; ++i) {
      for (let j = 0; j < n; ++j) {
        if (table[i][j]) continue;
        DFS(boardPath, [[i, j]]);
      }
    }
  }

  function DFS(boardPath, tablePath) {
    // console.log(boardPath, tablePath)
    if (!check(boardPath, tablePath)) return;

    const boardLen = boardPath.length;
    const tableLen = tablePath.length;

    const [a, b] = boardPath[boardLen - 1];
    const [c, d] = tablePath[tableLen - 1];

    let movable = false;
    for (let idx = 0; idx < 4; ++idx) {
      const na = dr[idx] + a;
      const nb = dc[idx] + b;
      const nc = dr[idx] + c;
      const nd = dc[idx] + d;

      if (na < 0 || na >= n) break;
      if (nb < 0 || nb >= n) break;
      if (visited[na][nb] || game_board[na][nb] || !table[na][nb]) break;
      if (nc < 0 || nc >= n) break;
      if (nd < 0 || nd >= n) break;
      if (visited[nc][nd] || game_board[nc][nd] || !table[nc][nd]) break;
      movable = true;
      DFS([...boardPath, [na, nb]], [...tablePath, [nc, nd]]);
    }

    if (!movable) {
      answer += boardLen;
      for (let idx; idx < boardLen; ++idx) {
        const [r1, c1] = boardPath[idx];
        game_board[r1][c1] = 1;

        const [r2, c2] = tablePath[idx];
        table[r2][c2] = 0;
      }
    }
  }

  function check(boardPath, tablePath) {
    //새로 추가된 원소가 평행이동된 도형인지 확인
    if (!boardPath || !tablePath) return false;
    const boardLen = boardPath.length;
    const tableLen = tablePath.length;
    // console.log(boardPath, tablePath)
    if (boardLen !== tableLen) return false;
    if (boardLen === 0) return false;
    if (boardLen === 1) return true;

    const [a, b] = boardPath[boardLen - 2];
    const [c, d] = tablePath[tableLen - 2];

    const [e, f] = boardPath[boardLen - 1];
    const [g, h] = tablePath[tableLen - 1];

    if (a - c !== e - g || b - d !== f - h) return false;
    return true;
  }
}
