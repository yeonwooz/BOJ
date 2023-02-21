function solution(k, dungeons) {
  let cnt = 0;
  const len = dungeons.length;
  for (let i = 0; i < len; ++i) {
    if (k < dungeons[i][0]) continue;
    const visited = Array(len).fill(0);
    cnt = Math.max(cnt, bruteForce(k, dungeons, i, visited, 0));
  }
  return cnt;
}

function bruteForce(k, dungeons, i, visited, cnt) {
  visited[i] = 1;
  k -= dungeons[i][1];
  cnt += 1;
  if (k <= 0) return cnt;
  for (let j = 0; j < dungeons.length; ++j) {
    if (!visited[j] && k >= dungeons[j][0]) {
      cnt = Math.max(cnt, bruteForce(k, dungeons, j, visited, cnt));
    }
  }
  return cnt;
}
