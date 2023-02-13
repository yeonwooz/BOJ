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

  let answerMaxIntensity = -1;
  let answerSummit = -1;
  let answerPath = [];

  // gates queue BFS
  for (let gate of gates) {
    for (let next = 1; next <= n; ++next) {
      const intensity = arr[gate][next];
      if (gate != next && intensity) {
        if (gates.includes(next) && next != gate) continue;
        const summit = summits.includes(next) ? next : -1;
        answerSummit = summit;
        answerMaxIntensity = intensity;
        DFS(gate, next, [gate, next], summit, intensity);
      }
    }
  }
  console.log("answerPath", answerPath);

  // gates 각 점에 대해 DFS시작
  function DFS(start, cur, history, summit, maxIntensity) {
    if (start === cur) {
      if (summit !== -1 && maxIntensity !== -1) {
        if (maxIntensity > answerMaxIntensity) {
          answerPath = history;
          answerMaxIntensity = maxIntensity;
          answerSummit = summit;
        } else if (
          maxIntensity === answerMaxIntensity &&
          summit < answerSummit
        ) {
          answerPath = history;
          answerMaxIntensity = maxIntensity;
          answerSummit = summit;
        }
      }
      return;
    }
    if (history.length >= 9) return;

    // 다음으로 진행
    for (let next = 1; next <= n; ++next) {
      const intensity = arr[cur][next];
      if (cur != next && intensity) {
        const isSummit = summits.includes(next);
        if (summit !== -1 && isSummit) continue;
        if (gates.includes(next) && next != start) continue;
        if (isSummit) summit = next;
        history.push(next);

        if (intensity > maxIntensity) maxIntensity = intensity;
        DFS(start, next, history, summit, maxIntensity);
        history.pop();
      }
    }
  }
}
