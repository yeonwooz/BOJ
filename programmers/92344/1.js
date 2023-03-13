function solution(board, skill) {
  const tmp = Array.from(Array(board.length + 1), () =>
    Array(board[0].length + 1).fill(0)
  );

  for (const [type, r1, c1, r2, c2, degree] of skill) {
    const d = type === 2 ? degree : -1 * degree;

    tmp[r1][c1] += d;
    tmp[r1][c2 + 1] -= d;
    tmp[r2 + 1][c1] -= d;
    tmp[r2 + 1][c2 + 1] += d;
  }

  for (let j = 0; j < tmp[0].length; ++j) {
    for (let i = 1; i < tmp.length; ++i) {
      tmp[i][j] += tmp[i - 1][j];
    }
  }

  for (let i = 0; i < tmp.length; ++i) {
    for (let j = 1; j < tmp[0].length; ++j) {
      tmp[i][j] += tmp[i][j - 1];
    }
  }

  let cnt = 0;
  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[0].length; ++j) {
      if (board[i][j] + tmp[i][j] > 0) cnt++;
    }
  }

  return cnt;
}
