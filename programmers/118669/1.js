function solution(n, paths, gates, summits) {
  /*
    연결된 노드들로, gates중 하나로 시작과 끝을 만들고 summits중 하나를 도중에 배치하여 만드는 경로중 최대 w가 최소인 것
    */
  const arr = Array(n + 1)
    .fill(0)
    .map((x) => Array(n + 1).fill(0));
  for (let path of paths) {
    const [i, j, w] = path;
    arr[i][j] = w;
    arr[j][i] = w;
  }

  let histories = [];

  // gates queue BFS
  for (let gate of gates) {
    for (let i = 1; i <= n; ++i) {
      const intensity = arr[gate][i];
      if (intensity) {
        const summit = summits.includes(i) ? i : -1;
        DFS(gate, i, [gate, i], summit, intensity);
      }
    }
  }

  // gates 각 점에 대해 DFS시작
  function DFS(start, cur, history, summit, maxIntensity) {
    if (start === cur) {
      if (summit != -1 && maxIntensity != -1) {
        histories.push(history);
      }
      return;
    }

    // 다음으로 진행
    for (let next = 1; next <= n; ++next) {
      const intensity = arr[cur][next];
      if (intensity) {
        const isSummit = summits.includes(next);
        if (summit !== -1 && isSummit) continue;
        if (gates.includes(next) && next != start) continue;
        if (isSummit) summit = next;
        histories.push(next);
        if (intensity > maxIntensity) maxIntensity = intensity;
        DFS(start, next, histories, summit, maxIntensity);
      }
    }
  }
}
