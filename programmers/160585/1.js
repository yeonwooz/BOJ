function solution(board) {
  board = board.map((row) => row.split(""));
  let shapeCnt = 0;
  for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 3; ++j) {
      if (board[i][j] !== ".") shapeCnt++;
    }
  }
  // console.log(shapeCnt, board)
  // console.log()
  const visited = Array.from(Array(3), () => [0, 0, 0]); //
  const board2 = Array.from(Array(3), () => [".", ".", "."]); //
  if (check()) return 1;
  let isSame = false;
  let error = false;
  for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 3; ++j) {
      if (!error && board[i][j] === "O") {
        visited[i][j] = 1;
        board2[i][j] = "O";
        DFS(i, j, 1, "O");
        visited[i][j] = 0;
        board2[i][j] = ".";
      }
    }
  }
  return error ? 0 : isSame ? 1 : 0;

  function DFS(i, j, cnt, shape) {
    // console.log(cnt, board2)
    if (check()) {
      if (cnt === shapeCnt) {
        isSame = true;
      }
      return;
    }
    if (cnt === 9) {
      if (check() && cnt === shapeCnt) {
        isSame = true;
      }
      return;
    }
    if (
      checkLeftDiagonal(i, j) ||
      checkRightDiagonal(i, j) ||
      checkRowDone(i, j) ||
      checkColDone(i, j)
    ) {
      if (check()) {
        if (cnt !== shapeCnt) {
          error = true;
        } else {
          isSame = true;
        }
      }
      return;
    }

    for (let nr = 0; nr < 3; ++nr) {
      for (let nc = 0; nc < 3; ++nc) {
        if (!visited[nr][nc]) {
          const nextShape = shape === "O" ? "X" : "O";
          // console.log('nr,nc',board[nr][nc],nextShape )
          if (board[nr][nc] === nextShape) {
            board2[nr][nc] = nextShape;
            visited[nr][nc] = 1;
            DFS(nr, nc, cnt + 1, nextShape);
            visited[nr][nc] = 0;
            board2[nr][nc] = ".";
          }
        }
      }
    }
  }
  function checkRightDiagonal(i, j) {
    const shape = board2[i][j];
    if (shape === ".") return false;
    let cnt = 0;
    const dr = [-1, 1];
    const dc = [1, -1];
    for (let idx = 0; idx < 2; ++idx) {
      const nr = i + dr[idx];
      const nc = j + dc[idx];
      if (0 <= nr && nr < 3 && 0 <= nc && nc < 3) {
        if (board2[nr][nc] !== shape) return false;
        cnt++;
      }
    }
    return cnt === 3;
  }

  function checkLeftDiagonal(i, j) {
    const shape = board2[i][j];
    if (shape === ".") return false;
    let cnt = 0;
    const dr = [-1, 1];
    const dc = [-1, 1];
    for (let idx = 0; idx < 2; ++idx) {
      const nr = i + dr[idx];
      const nc = j + dc[idx];
      if (0 <= nr && nr < 3 && 0 <= nc && nc < 3) {
        if (board2[nr][nc] !== shape) return false;
        cnt++;
      }
    }

    return cnt === 3;
  }

  function checkRowDone(i, j) {
    const shape = board2[i][j];
    if (shape === ".") return false;
    for (let r = 0; r < 3; ++r) {
      if (board2[r][j] !== shape) return false;
    }
    return true;
  }

  function checkColDone(i, j) {
    const shape = board2[i][j];
    if (shape === ".") return false;
    for (let c = 0; c < 3; ++c) {
      if (board2[i][c] !== shape) return false;
    }
    return true;
  }

  function check() {
    for (let i = 0; i < 3; ++i) {
      for (let j = 0; j < 3; ++j) {
        if (board[i][j] !== board2[i][j]) return false;
      }
    }
    return true;
  }
}
