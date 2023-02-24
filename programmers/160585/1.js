function solution(board) {
  board = board.map((row) => row.split(""));
  let ocnt = 0;
  let xcnt = 0;
  for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 3; ++j) {
      if (board[i][j] === "O") ocnt++;
      else if (board[i][j] === "X") xcnt++;
    }
  }
  if (xcnt > ocnt || ocnt > xcnt + 1) return 0;
  if (ocnt === xcnt && !ocnt) return 1;
  // console.log(xcnt+ocnt, board)
  // console.log()
  const visited = Array.from(Array(3), () => [0, 0, 0]); //
  const board2 = Array.from(Array(3), () => [".", ".", "."]); //

  let isSame = false;
  let error = false;
  for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 3; ++j) {
      if (board[i][j] === "O") {
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
    if (check()) {
      if (cnt === xcnt + ocnt) {
        isSame = true;
        error = false;
      }
    }
    // if (cnt<6) console.log(error, isSame, cnt, board2)
    if (cnt === 9) {
      // console.log(error, isSame, cnt, board2)
      if (isSame) error = false;
      return;
    }

    if (
      checkLeftDiagonal(i, j) ||
      checkRightDiagonal(i, j) ||
      checkRowDone(i, j) ||
      checkColDone(i, j)
    ) {
      if (cnt !== xcnt + ocnt) {
        error = true;
      }
      return;
    }

    for (let nr = 0; nr < 3; ++nr) {
      for (let nc = 0; nc < 3; ++nc) {
        if (!visited[nr][nc]) {
          const nextShape = shape === "O" ? "X" : "O";
          if (board[nr][nc] === nextShape) {
            visited[nr][nc] = 1;
            board2[nr][nc] = nextShape;
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
    if ((i === 0 && j === 2) || (i === 1 && j === 1) || (i === 2 && j === 0)) {
      if (board2[0][2] !== shape) return false;
      if (board2[1][1] !== shape) return false;
      if (board2[2][0] !== shape) return false;
      return true;
    }
    return false;
  }

  function checkLeftDiagonal(i, j) {
    const shape = board2[i][j];
    if (shape === ".") return false;
    if (i !== j) return false;
    for (let idx = 0; idx < 3; ++idx) {
      if (board2[idx][idx] !== shape) return false;
    }
    return true;
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
