function solution(tickets) {
  const cities = [];
  for (let i = 0; i < tickets.length; ++i) {
    const [from, to] = tickets[i];
    cities.push(from);
    cities.push(to);
  }
  const total = [...new Set(cities)].length;

  const visited = new Map();
  const start = "ICN";

  for (let i = 0; i < tickets.length; ++i) {
    const [from, to] = tickets[i];
    if (from !== start) continue;

    if (!visited.has(start)) {
      visited.set(start, [to]);
    } else {
      visited.get(start).push(to);
      visited.get(start).sort();
    }
    DFS(to);
  }

  const answer = [start];
  let key = start;
  while (visited.has(key)) {
    const cities = visited.get(key);
    if (cities.length) {
      const next = cities.shift();
      answer.push(next);
      key = next;
    } else break;
  }
  return answer;

  function DFS(v) {
    if ([...visited.entries()].length >= total) return;

    for (let i = 0; i < tickets.length; ++i) {
      const [from, to] = tickets[i];
      if (from !== v) continue;
      if (!visited.has(v)) {
        visited.set(v, [to]);
      } else {
        visited.get(v).push(to);
        visited.get(v).sort();
      }
      DFS(to);
    }
  }
}
