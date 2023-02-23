function solution(board, r, c) {
  const costs = Array.from(Array(4), () => [
    Infinity,
    Infinity,
    Infinity,
    Infinity,
  ]); // 지워지는 최소비용
  let totalCnt = 16; // 15 14 13 ... 0
  let openedCnt = 0; // 0 1 2

  const dr = [-1, 0, 0, 1];
  const dc = [0, 1, 0, -1];

  BFS(r, c, 0);
  function BFS(r, c, initCost) {
    const q = [];
    q.push([r, c, initCost]);

    while (q.length && totalCnt) {
      const [i, j, cost] = q.shift();
      openedCnt++;
      // 상하좌우, 컨트롤영역 탐색하며 이동, board[i][j] === 이동한 카드라면 costs[i][j], costs[이동한곳] 갱신
      // totalCnt -= 2
      // costs[i][j] = Math.min(costs[i][j], cost)
      for (let idx = 0; idx < 4; ++idx) {
        const nr = i + dr[idx];
        const nc = j + dc[idx];
        if (
          0 <= nr &&
          nr < 4 &&
          0 <= nc &&
          nc < 4 &&
          board[nr][nc] &&
          costs[nr][nc] === Infinity
        ) {
          if (board[i][j] === board[nr][nc]) {
            costs[i][j] = Math.min(costs[i][j], cost + 1);
            costs[nr][nc] = Math.min(costs[nr][nc], cost + 1);
            board[i][j] = 0;
            board[nr][nc] = 0;
            totalCnt -= 2;
            q.push([nr, nc, cost + 1]);
          }
        }
      }

      let ctrl_i = i;
      let ctrl_j = j;
      while (ctrl_i < 4 && costs[ctrl_i][ctrl_j] < Infinity) {
        ctrl_i++;
      }
      if (
        ctrl_i !== i &&
        board[ctrl_i][ctrl_j] &&
        board[ctrl_i][ctrl_j] === board[i][j]
      ) {
        costs[i][j] = Math.min(costs[i][j], cost + 1);
        costs[ctrl_i][ctrl_j] = Math.min(costs[ctrl_i][ctrl_j], cost + 1);
        board[i][j] = 0;
        board[ctrl_i][ctrl_j] = 0;
        totalCnt -= 2;
        q.push([ctrl_i, ctrl_j, cost + 1]);
      }
      while (ctrl_j < 4 && costs[ctrl_i][ctrl_j] < Infinity) {
        ctrl_j++;
      }
      if (
        ctrl_j !== j &&
        board[ctrl_i][ctrl_j] &&
        board[ctrl_i][ctrl_j] === board[i][j]
      ) {
        costs[i][j] = Math.min(costs[i][j], cost + 1);
        costs[ctrl_i][ctrl_j] = Math.min(costs[ctrl_i][ctrl_j], cost + 1);
        board[i][j] = 0;
        board[ctrl_i][ctrl_j] = 0;
        totalCnt -= 2;
        q.push([ctrl_i, ctrl_j, cost + 1]);
      }
      while (0 <= ctrl_i && costs[ctrl_i][ctrl_j] < Infinity) {
        ctrl_i--;
      }
      if (
        ctrl_i !== i &&
        board[ctrl_i][ctrl_j] &&
        board[ctrl_i][ctrl_j] === board[i][j]
      ) {
        costs[i][j] = Math.min(costs[i][j], cost + 1);
        costs[ctrl_i][ctrl_j] = Math.min(costs[ctrl_i][ctrl_j], cost + 1);
        board[i][j] = 0;
        board[ctrl_i][ctrl_j] = 0;
        totalCnt -= 2;
        q.push([ctrl_i, ctrl_j, cost + 1]);
      }
      while (0 <= ctrl_j && costs[ctrl_i][ctrl_j] < Infinity) {
        ctrl_j--;
      }
      if (
        ctrl_j !== j &&
        board[ctrl_i][ctrl_j] &&
        board[ctrl_i][ctrl_j] === board[i][j]
      ) {
        costs[i][j] = Math.min(costs[i][j], cost + 1);
        costs[ctrl_i][ctrl_j] = Math.min(costs[ctrl_i][ctrl_j], cost + 1);
        board[i][j] = 0;
        board[ctrl_i][ctrl_j] = 0;
        totalCnt -= 2;
        q.push([ctrl_i, ctrl_j, cost + 1]);
      }
    }
  }
  console.log(costs);
}
