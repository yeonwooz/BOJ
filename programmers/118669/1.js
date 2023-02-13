function solution(n, paths, gates, summits) {
  // 다익스트라
  const graph = new Array(n + 1).fill(null).map((_) => []);
  for (let i = 0; i < paths.length; i++) {
    const [a, b, w] = paths[i];
    graph[a].push([w, b]);
    graph[b].push([w, a]);
  }

  // 산봉우리에서 나가는 간선 제거
  for (let summit of summits) {
    graph[summit] = [];
  }

  let q = gates;

  // 각 노드까지 도달하는 누적 intensity
  const dp = new Array(n + 1).fill(10000001);

  // 시작 위치 초기화
  gates.forEach((v) => (dp[v] = -1));

  // bfs
  while (q.length > 0) {
    let set = new Set(); // 중복없게
    while (q.length > 0) {
      const qv = q.pop();
      for (let [w, v] of graph[qv]) {
        const maxV = Math.max(dp[qv], w);
        if (dp[v] > maxV) {
          dp[v] = maxV;
          set.add(v);
        }
      }
    }
    q = [...set];
  }

  // 정렬해서 배열의 첫번째 값 가져오기
  const answers = summits
    .map((v) => [v, dp[v]])
    .sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] - b[0];
      }
      return a[1] - b[1];
    });

  return answers[0];
}
