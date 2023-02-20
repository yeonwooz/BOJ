function solution(n, costs) {
  let answer = 0;
  costs.sort((a, b) => a[2] - b[2]);
  const parents = Array(n)
    .fill(0)
    .map((_, i) => i);
  let cnt = 0;

  for (const [a, b, c] of costs) {
    if (cnt === n) break;
    if (find(a) !== find(b)) {
      // 사이클이 없어야 함
      answer += c;
      union(a, b);
      cnt++;
    }
  }
  return answer;

  function union(x, y) {
    // 하나의 그룹으로 합치기
    x = find(x);
    y = find(y);
    if (x === y) return;
    if (x < y) parents[y] = x;
    else parents[x] = y;
  }

  function find(v) {
    // 부모찾기
    if (parents[v] === v) return v;
    parents[v] = find(parents[v]);
    return parents[v];
  }
}
