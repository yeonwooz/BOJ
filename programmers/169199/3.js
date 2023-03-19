// https://comdoc.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%A6%AC%EC%BD%94%EC%B3%87-%EB%A1%9C%EB%B4%87
function solution(board) {
  const n = board.length;
  const m = board[0].length;
  const q = [];
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (board[i][j] === "R") {
        q.push([i, j, 0]);
      }
    }
  }

  // const dr = [-1, 1, 0, 0];  // 상하좌우
  // const dc = [0, 0, -1, 1];
  const visited = new Set();
  let answer = Infinity;

  return BFS();

  return answer === Infinity ? -1 : answer;

  function BFS() {
    while (q.length) {
      const [i, j, cnt] = q.shift();
      const element = i.toString() + "-" + j.toString();
      if (visited.has(element)) continue;
      if (board[i][j] === "G") {
        return cnt;
      }
      visited.add(element);

      for (const [diff_x, diff_y] of [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
      ]) {
        let cur_i = i;
        let cur_j = j;
        let n_i = cur_i;
        let n_j = cur_j;

        while (1) {
          n_i = cur_i + diff_x;
          n_j = cur_j + diff_y;

          if (
            0 <= n_i &&
            n_i < n &&
            0 <= n_j &&
            n_j < m &&
            board[n_i][n_j] !== "D"
          ) {
            cur_i = n_i;
            cur_j = n_j;
            continue;
          }
          q.push([cur_i, cur_j, cnt + 1]);
          break;
        }
      }
    }

    return -1;
  }
}
