function solution(board) {
  const n = board.length;
  const m = board[0].length;
  let start = [];
  let end = [];
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (board[i][j] === "R") {
        start = [i, j];
      } else if (board[i][j] === "G") {
        end = [i, j];
      }
    }
  }
  console.log("start, end", start, end);
  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, 1, -1];
  const visited = Array.from(Array(n), () => Array(m).fill(0));
  let answer = Infinity;

  BFS();

  function BFS() {
    const [s_i, s_j] = start;
    const q = [
      {
        i: s_i,
        j: s_j,
        cost: 0,
      },
    ];
    visited[s_i][s_j] = 1;

    while (q.length) {
      const popped = q.shift();
      const { i, j, cost } = popped;

      console.log(i, j, cost);
      if (i === end[0] && j === end[1] && cost < answer) {
        answer = cost;
      }

      for (let idx = 0; idx < 4; ++idx) {
        const n_r = i + dr[idx];
        const n_c = j + dc[idx];

        let slide = 0;
        while (
          0 <= n_r + slide &&
          n_r + slide < n &&
          0 <= n_c + slide &&
          n_c + slide < m &&
          board[n_r + slide][n_c + slide] !== "D" &&
          !visited[n_r + slide][n_c + slide]
        ) {
          visited[n_r + slide][n_c + slide] = 1;
          slide++;
        }

        q.push({
          i: n_r,
          j: n_c,
          cost: cost + 1,
        });
      }
    }
  }

  return answer === Infinity ? -1 : answer;
}
