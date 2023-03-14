// [WIP]

function solution(n, m, x, y, r, c, k) {
  // 최소경로보다 k가 작으면 빠져나갈 수 없음
  if (Math.abs(x - r) + Math.abs(y - c) > k) return "impossible";

  x--;
  y--;
  r--;
  c--;

  // 사전순: dlru
  const dr = [1, 0, 0, -1];
  const dc = [0, -1, 1, 0];
  const directions = ["d", "l", "r", "u"];

  const answers = [];
  BFS(x, y, "");

  if (!answers.length) return "impossible";
  answers.sort();
  return answers[0];

  function BFS(x, y) {
    const q = [];
    q.push([x, y, "", 0]);

    while (q.length) {
      const [i, j, path, len] = q.pop();

      if (i === r && j === c && len === k) {
        answers.push(path);
      }
      // console.log('k',k,'path', path)
      if (len > k) break;

      for (let idx = 0; idx < 4; ++idx) {
        const nr = dr[idx] + i;
        const nc = dc[idx] + j;
        const dir = directions[idx];

        if (0 <= nr && nr < n && 0 <= nc && nc < m && len < k) {
          q.push([nr, nc, path + dir, len + 1]);
        }
      }
    }
  }
}
