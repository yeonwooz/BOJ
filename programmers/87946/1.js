function solution(k, dungeons) {
  let maxCnt = 0;

  const len = dungeons.length;
  const visited = Array(len).fill(0);
  for (let i = 0; i < len; ++i) {
    if (k < dungeons[i][0]) continue;
    visited[i] = 1;
    bruteForce(k, dungeons, i, visited, 0);
    visited[i] = 0;
  }
  return maxCnt;

  function bruteForce(k, dungeons, i, visited, cnt) {
    k -= dungeons[i][1];
    cnt += 1;
    for (let j = 0; j < dungeons.length; ++j) {
      if (!visited[j] && k >= dungeons[j][0]) {
        visited[j] = 1;
        bruteForce(k, dungeons, j, visited, cnt);
        visited[j] = 0;
      }
    }
    maxCnt = Math.max(maxCnt, cnt);
  }
}
