function solution(board, skill) {
  const destroyed = new Set();
  for (const [type, r1, c1, r2, c2, degree] of skill) {
    if (type === 1) {
      attack(r1, c1, r2, c2, degree);
    } else {
      heal(r1, c1, r2, c2, degree);
    }
  }
  return board.length * board[0].length - destroyed.size;

  function attack(r1, c1, r2, c2, degree) {
    for (let i = r1; i <= r2; ++i) {
      for (let j = c1; j <= c2; ++j) {
        board[i][j] -= degree;
        if (board[i][j] < 1) {
          destroyed.add(i.toString() + "-" + j.toString());
        }
      }
    }
  }

  function heal(r1, c1, r2, c2, degree) {
    for (let i = r1; i <= r2; ++i) {
      for (let j = c1; j <= c2; ++j) {
        board[i][j] += degree;
        if (board[i][j] >= 1) {
          destroyed.delete(i.toString() + "-" + j.toString());
        }
      }
    }
  }
}
