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

  // 큐
  let q = [];
  dijkstra(1);

  return costs.filter((x) => x <= K).length;

  function dijkstra(v) {
    visited[v] = 1;

    const currentQue = [];
    for (let next = 1; next <= N; ++next) {
      // next에 방문한 적 없고 popped -> next 서로 연결되어 있으면
      // 정점과 연결된 점들 모두 탐색하며 우선순위큐 생성
      if (!visited[next] && board[v][next]) {
        costs[next] = Math.min(costs[next], costs[v] + board[v][next]);
        currentQue.push(next);
      }
    }
    // 비용 낮은 순으로 우선순위큐 정렬
    currentQue.sort((a, b) => {
      if (costs[b] < costs[a]) return 1;
      return -1;
    });

    q = [...new Set([...q, ...currentQue])];

    if (q.length) {
      const popped = q.shift();
      dijkstra(popped);
    }
  }
}
