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

    let cnt = 0;
    while (q.length) {
      if (cnt === 10) break;
      cnt++;
      const popped = q.shift();
      const { i, j, cost } = popped;

      if (i === end[0] && j === end[1] && cost < answer) {
        answer = cost;
      }

      for (let idx = 0; idx < 4; ++idx) {
        const n_r = i + dr[idx];
        const n_c = j + dc[idx];

        let slide = 1;

        while (
          0 <= n_r + slide * dr[idx] &&
          n_r + slide * dr[idx] < n &&
          0 <= n_c + slide * dc[idx] &&
          n_c + slide * dc[idx] < m &&
          board[n_r + slide * dr[idx]][n_c + slide * dc[idx]] !== "D" &&
          !visited[n_r + slide * dr[idx]][n_c + slide * dc[idx]]
        ) {
          visited[n_r + slide * dr[idx]][n_c + slide * dc[idx]] = 1;
          slide++;
        }

        q.push({
          i: n_r + [slide - 1] * dr[idx],
          j: n_c + [slide - 1] * dc[idx],
          cost: cost + 1,
        });
      }
    }
  }

  return answer === Infinity ? -1 : answer;
}
