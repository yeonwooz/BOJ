function solution(game_board, table) {
  const n = game_board.length;
  const dr = [-1, 0, 1, 0];
  const dc = [0, 1, 0, -1];
  const directions = ["top", "right", "bottom", "left"];
  const boardVisited = Array.from(Array(n), () => Array(n).fill(0));
  const boardRoutes = [];

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      if (game_board[i][j] || boardVisited[i][j]) continue;
      boardRoutes.push(boardDFS(i, j, []));
    }
  }

  const tableVisited = Array.from(Array(n), () => Array(n).fill(0));
  const puzzles = new Map();
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      if (!table[i][j] || tableVisited[i][j]) continue;
      puzzles.set(puzzles.size, tableDFS(i, j, []));
    }
  }
  console.log(puzzles);
  let answer = 0;
  for (const route of boardRoutes) {
    // 이 루트를 채울 수 있는 puzzle이 있다면 루트 길이만큼 보드를 채우고 해당 퍼즐조각은 제거
    for (let idx = 0; idx < puzzles.size; ++idx) {
      console.log("checked:", idx);
      if (checkAllDirections(route, puzzles.get(idx))) {
        console.log("===check DONE===");
        answer += route.length;
        puzzles.set(idx, null);
        break;
      }
    }
  }
  return answer;

  function boardDFS(i, j, path) {
    boardVisited[i][j] = 1;
    path.push([i, j]);
    for (let idx = 0; idx < 4; ++idx) {
      const nr = dr[idx] + i;
      const nc = dc[idx] + j;
      if (
        0 <= nr &&
        nr < n &&
        0 <= nc &&
        nc < n &&
        !boardVisited[nr][nc] &&
        !game_board[nr][nc]
      ) {
        boardDFS(nr, nc, path);
      }
    }
    return path;
  }

  function tableDFS(i, j, path) {
    tableVisited[i][j] = 1;
    path.push([i, j]);
    for (let idx = 0; idx < 4; ++idx) {
      const nr = dr[idx] + i;
      const nc = dc[idx] + j;
      if (
        0 <= nr &&
        nr < n &&
        0 <= nc &&
        nc < n &&
        !tableVisited[nr][nc] &&
        table[nr][nc]
      ) {
        tableDFS(nr, nc, path);
      }
    }
    return path;
  }

  function checkAllDirections(route, puzzle) {
    // 퍼즐을 회전시켜서 경로와 일치시킬 수 있는지 체크
    if (!route || !puzzle) return false;
    const routeLen = route.length;
    const puzzleLen = puzzle.length;
    if (routeLen !== puzzleLen) return false;
    if (routeLen === 1) return true;

    console.log(route);
    console.log(puzzle);

    let foundSame = false;
    for (let rotateCnt = 0; rotateCnt < 4; ++rotateCnt) {
      // 이번 회전카운트에 대하여

      let isSame = true;
      for (let idx = 1; idx < puzzleLen; ++idx) {
        const [prevI, prevJ] = puzzle[idx - 1];
        const [curI, curJ] = puzzle[idx];

        const diff = [curI - prevI, curJ - prevJ];

        let dir = 0;
        if (diff[0] < 0 && diff[1] === 0) dir = 0; // top
        else if (diff[0] === 0 && diff[1] > 0) dir = 1; // right
        else if (diff[0] > 0 && diff[1] === 0) dir = 2; // bottom
        else if (diff[0] === 0 && diff[1] < 0) dir = 3; // left

        console.log("변환전", puzzle[idx], dir);
        dir = (dir + rotateCnt) % 4;
        puzzle[idx][0] = dr[dir] + puzzle[idx - 1][0];
        puzzle[idx][1] = dc[dir] + puzzle[idx - 1][1];

        console.log("변환후", puzzle[idx], dir);

        if (
          route[idx][0] - route[idx - 1][0] !==
            puzzle[idx][0] - puzzle[idx - 1][0] ||
          route[idx][1] - route[idx - 1][1] !==
            puzzle[idx][1] - puzzle[idx - 1][1]
        ) {
          isSame = false;
          break;
        }
      }
      if (isSame) {
        foundSame = true;
        break;
      }
    }

    return foundSame;
  }
}
