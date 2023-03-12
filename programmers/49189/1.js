function solution(n, edge) {
  const visited = Array(n + 1).fill(0);
  let dists = Array(n + 1).fill(Infinity);
  visited[1] = 1;
  dists[1] = 0;
  BFS();
  let cnt = 0;
  let max = 0;
  for (let i = 0; i < dists.length; ++i) {
    if (dists[i] === Infinity) continue;
    if (dists[i] > max) {
      max = dists[i];
      cnt = 1;
    } else if (dists[i] === max) {
      cnt++;
    }
  }
  return cnt;

  function BFS() {
    const q = [];
    q.push({
      node: 1,
      dist: 0,
    });

    while (q.length) {
      const { node, dist } = q.shift();

      for (const [a, b] of edge) {
        if (node === a && !visited[b]) {
          q.push({
            node: b,
            dist: Math.min(dist + 1, dists[b]),
          });
          visited[b] = 1;
          dists[b] = Math.min(dist + 1, dists[b]);
        } else if (node === b && !visited[a]) {
          q.push({
            node: a,
            dist: Math.min(dist + 1, dists[a]),
          });
          visited[a] = 1;
          dists[a] = Math.min(dist + 1, dists[a]);
        }
      }
    }
  }
}
