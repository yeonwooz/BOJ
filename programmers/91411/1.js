function solution(N, road, K) {
  // 인접행렬
  const board = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
  for (let [a, b, c] of road) {
    if (board[a][b]) board[a][b] = Math.min(board[a][b], c);
    else board[a][b] = c;

    if (board[b][a]) board[b][a] = Math.min(board[b][a], c);
    else board[b][a] = c;
  }
  // 비용배열
  const costs = Array(N + 1).fill(Infinity);
  costs[1] = 0;

  // 방문배열
  const visited = Array(N + 1).fill(0);
  dijkstra(1);
  return costs.filter((x) => x <= K).length;

  function dijkstra(v) {
    const q = [];
    q.push(v);
    visited[1] = 1;

    while (q.length) {
      const popped = q.shift();
      for (let next = 1; next <= N; ++next) {
        const nextCost = board[popped][next];
        if (!visited[next] && nextCost) {
          // next에 방문한 적 없고 popped -> next 서로 연결되어 있으면
          visited[next] = 1;
          costs[next] = Math.min(costs[next], costs[popped] + nextCost);
          q.push(next);
        }
      }
    }
  }
}
