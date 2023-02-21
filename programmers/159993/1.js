function solution(maps) {
  /*
    L->S, L->E 경로가 존재하지 않으면 -1
    존재하면 L->S + L->E
    */
  let S = [];
  let E = [];
  let L = [];
  const visited = Array.from(Array(maps.length), () => []);
  for (let i = 0; i < maps.length; ++i) {
    // 지도 스캔
    visited[i] = Array(maps[i].length).fill(0);
    for (let j = 0; j < maps[i].length; ++j) {
      if (maps[i][j] === "S") S = [i, j];
      if (maps[i][j] === "E") E = [i, j];
      if (maps[i][j] === "L") L = [i, j];
    }
  }

  visited[L[0]][L[1]] = 1;
  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];
  let startToLeverTime = 10001;
  let leverToExitTime = 10001;

  function DFS([i, j], time) {
    if (i === S[0] && j === S[1]) {
      startToLeverTime = Math.min(startToLeverTime, time);
      return;
    }
    if (i === E[0] && j === E[1]) {
      leverToExitTime = Math.min(leverToExitTime, time);
      return;
    }
    for (let idx = 0; idx < 4; ++idx) {
      const nx = i + dx[idx];
      const ny = j + dy[idx];

      if (
        0 <= nx &&
        nx < maps.length &&
        0 <= ny &&
        ny < maps[0].length &&
        !visited[nx][ny] &&
        maps[nx][ny] !== "X"
      ) {
        visited[nx][ny] = 1;
        DFS([nx, ny], time + 1);
        visited[nx][ny] = 0;
      }
    }
  }

  DFS(L, 0);
  if (startToLeverTime === 10001 || leverToExitTime === 10001) return -1;
  return startToLeverTime + leverToExitTime;
}
