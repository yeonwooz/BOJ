function solution(begin, target, words) {
  const n = words.length;
  let costs = Array(n).fill(Infinity); // begin 단어가 각 단어에 도달하는 최소비용
  let visited = Array(n).fill(0);
  const targetIdx = words.indexOf(target);
  if (targetIdx === -1) return 0;
  BFS();
  return costs[targetIdx] === Infinity ? 0 : costs[targetIdx];

  function BFS() {
    const q = []; // 인덱스

    for (let i = 0; i < n; ++i) {
      const word = words[i];
      let diffCnt = 0;
      for (let j = 0; j < word.length; ++j) {
        if (diffCnt >= 2) break;
        if (word[j] !== begin[j]) diffCnt++;
      }
      if (diffCnt === 0) {
        visited[i] = 1;
        costs[i] = 0;
        q.push(i);
      } else if (diffCnt === 1) {
        visited[i] = 1;
        costs[i] = 1;
        q.push(i);
      }
    }

    if (!q.length) return;

    while (q.length) {
      const poppedIdx = q.shift();
      const curWord = words[poppedIdx];

      for (let i = 0; i < n; ++i) {
        if (i === poppedIdx || visited[i]) continue;

        const word = words[i];

        let diffCnt = 0;
        for (let j = 0; j < word.length; ++j) {
          if (diffCnt >= 2) break;
          if (word[j] !== curWord[j]) diffCnt++;
        }
        if (diffCnt === 0) {
          visited[i] = 1;
          costs[i] = costs[poppedIdx];
          q.push(i);
        } else if (diffCnt === 1) {
          visited[i] = 1;
          costs[i] = costs[poppedIdx] + 1;
          q.push(i);
        }
      }
    }
  }
}
