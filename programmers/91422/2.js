function solution(n, costs) {
  costs.sort((a, b) => a[2] - b[2]);   // 최소비용부터 정렬해두고 시작해야 한다!
  const parents = Array.from(Array(n), (_, i) => i);
  let answer = 0;
  let cnt = 0;
  for (const [a, b, c] of costs) {
    if (cnt === n) break;
    if (find(a, parents) !== find(b, parents)) {
      union(a, b, parents);
      cnt++;
      answer += c;
    }
  }
  return answer;
}

function union(x, y, parents) {
  x = find(x, parents);
  y = find(y, parents);
  if (x === y) return;
  if (x < y) parents[y] = x;
  else parents[x] = y;
}

function find(v, parents) {
  if (v === parents[v]) return v;
  parents[v] = find(parents[v], parents);    // parents[v]의 부모를 구하는 것
  return parents[v];
}
