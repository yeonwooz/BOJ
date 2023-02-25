function solution(n, computers) {
  const visited = Array(n).fill(0);
  let cnt = 0;
  for (let i = 0; i < n; ++i) {
    if (!visited[i]) {
      visited[i] = 1;
      DFS(i);
      cnt++;
    }
  }

  return cnt;

  function DFS(v) {
    for (let i = 0; i < n; ++i) {
      if (i === v || visited[i] || !computers[v][i]) continue;
      visited[i] = 1;
      DFS(i);
    }
  }
}
