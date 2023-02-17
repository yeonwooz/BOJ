function solution(weights) {
  const dists = [
    [2, 3],
    [3, 4],
    [2, 4],
  ];
  const wlen = weights.length;
  let cnt = 0;
  for (let i = 0; i < wlen - 1; ++i) {
    for (let j = i + 1; j < wlen; ++j) {
      const left = weights[i];
      const right = weights[j];
      if (left === right) {
        cnt++;
        continue;
      }
      for (let [dist1, dist2] of dists) {
        // 만약 left * a === right * b -> cnt++
        if (left * dist1 === right * dist2 || left * dist2 === right * dist1)
          cnt++;
      }
    }
  }
  return cnt;
}
