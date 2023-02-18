function solution(n, vertex) {
  //인접리스트 만들기
  const ads = Array.from(Array(n + 1), () => []);
  for (let [a, b] of vertex) {
    ads[a].push(b);
    ads[b].push(a);
  }

  const visited = Array(n + 1).fill(0);
  const distances = Array(n + 1).fill(0);

  BFS(1, visited, ads, distances);
  const max = Math.max(...distances);
  return distances.slice(1).filter((x) => x === max).length;
}

function BFS(v, visited, ads, distances) {
  const q = [];
  q.push(v);
  visited[v] = 1;

  while (q.length) {
    const popped = q.shift();  // 앞에서부터 꺼내지 않으면 일부에 대해 깊이우선탐색이 되어버린다. shift연산은 O(n)이지만 요소가 적으면 알아서 최적화된다.
    for (let next of ads[popped]) {
      if (visited[next]) continue;
      visited[next] = 1;
      q.push(next);
      distances[next] = distances[popped] + 1;
    }
  }
}
