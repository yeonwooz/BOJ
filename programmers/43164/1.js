function solution(tickets) {
  const n = tickets.length;
  const visited = Array(n * 2).fill(0);
  const citySet = new Set();
  const start = "ICN";
  citySet.add(start);
  let answer = null;

  DFS(start, [start]);
  return answer;

  function DFS(v, path) {
    if (path.length === n + 1) {
      if (!answer) answer = [...path];
      else if (answer.join("") > path.join("")) {
        answer = [...path];
      }
      return;
    }

    for (let i = 0; i < n; ++i) {
      const [from, to] = tickets[i];
      if (from === v && !visited[i]) {
        visited[i] = 1;
        citySet.add(to);
        path.push(to);

        DFS(to, path);

        visited[i] = 0;
        citySet.delete(to);
        path.pop();
      }
    }
  }
}
