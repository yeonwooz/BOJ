// 정답 참고

function getPuzzles(origin, number) {
  const table = [];
  for (let i = 0; i < origin.length; i++) {
    const item = [];
    for (let j = 0; j < origin[i].length; j++) {
      item.push(origin[i][j]);
    }

    table.push(item);
  }

  const num = number === 0 ? 1 : 0;
  let arr = [];
  const setPuzzle = (x, y) => {
    if (table[x][y] === number) {
      table[x][y] = num;
      arr.push([x, y]);

      if (y + 1 < table.length) setPuzzle(x, y + 1);
      if (y - 1 >= 0) setPuzzle(x, y - 1);
      if (x + 1 < table.length) setPuzzle(x + 1, y);
      if (x - 1 >= 0) setPuzzle(x - 1, y);
    }
  };

  const result = [];

  for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table[i].length; j++) {
      if (table[i][j] === number) {
        setPuzzle(i, j);
        result.push(arr);
        arr = [];
      }
    }
  }

  return result
    .map((data) =>
      data.map((p, idx) => {
        return idx === 0 ? p : [data[0][0] - p[0], data[0][1] - p[1]];
      })
    )
    .sort((a, b) => b.length - a.length);
}

function getRotatedTable(table) {
  const arr = new Array(table[0].length).fill(0).map((_) => []);

  for (let i = table.length - 1; i >= 0; i--) {
    for (let j = 0; j < table[0].length; j++) {
      arr[j].push(table[i][j]);
    }
  }

  return arr;
}

function isMatch(spot, puzzle) {
  for (let i = 1; i < spot.length; i++) {
    if (spot[i][0] !== puzzle[i][0] || spot[i][1] !== puzzle[i][1])
      return false;
  }

  return true;
}

function solution(gameBoard, table) {
  const removePuzzle = (puzzle) => {
    const originPuzzle = puzzle.map((data, idx) => {
      return idx === 0
        ? data
        : [puzzle[0][0] - data[0], puzzle[0][1] - data[1]];
    });

    originPuzzle.forEach((data) => {
      table[data[0]][data[1]] = 0;
    });
  };

  let answer = 0;

  // 게임 보드에서 퍼즐을 넣을 수 있는 모양들 파악
  const slots = getPuzzles(gameBoard, 0);
  console.log(slots);

  // 3번 회전시켜서 보드에 퍼즐을 맞출 수 있는지 파악
  for (let i = 0; i <= 3; i++) {
    if (i !== 0) table = getRotatedTable(table); // 테이블 회전
    const puzzles = getPuzzles(table, 1);

    // slots vs. puzzles를 비교하고
    puzzles.forEach((puzzle) => {
      for (let j = 0; j < slots.length; j++) {
        if (slots[j].length < puzzle.length) break;

        // 퍼즐이 slots에 맞춰진다면 보드와 테이블에서 지우고 answer을 증가시킬 것
        if (slots[j].length === puzzle.length && isMatch(slots[j], puzzle)) {
          answer += puzzle.length;
          removePuzzle(puzzle);
          slots.splice(j, 1);
          break;
        }
      }
    });
  }

  return answer;
}
