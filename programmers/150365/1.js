function solution(n, m, x, y, r, c, k) {
  const board = Array(n)
    .fill()
    .map(() => Array(m).fill(0));
  // S: x-1, y-1
  // E: r-1, c-1
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const routes = []; // 예) ["lldud", "ulldd"]

  function DFS(cur_x, cur_y, dist, cur_route) {
    if (cur_x === r - 1 && cur_y === c - 1 && dist === k) {
      routes.push(cur_route);
      return;
    }
    if (dist === k) return;

    for (let i = 0; i < 4; ++i) {
      const next_x = cur_x + dx[i];
      const next_y = cur_y + dy[i];

      if (0 <= next_x && next_x < m && 0 <= next_y && next_y < n) {
        if (i === 0) cur_route += "u";
        if (i === 1) cur_route += "r";
        if (i === 2) cur_route += "d";
        if (i === 3) cur_route += "l";
        dist++;
        DFS(next_x, next_y, dist, cur_route);
      }
    }
  }

  DFS(x - 1, y - 1, 0, "");

  if (routes.length === 0) return "impossible";
  routes.sort();
  return routes[0];
}
