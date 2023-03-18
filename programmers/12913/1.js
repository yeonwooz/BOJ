function solution(land) {
  let answer = 0;
  for (let col = 0; col < 4; ++col) {
    // 0행에서 몇열을 밟고 시작할지
    const colArr = Array(4).fill(null);
    search(0, col, colArr, 0);
  }
  return answer;

  function search(row, cur_col, colArr, sum) {
    if (row === land.length) {
      if (sum > answer) {
        answer = sum;
      }
      return;
    }
    sum += land[row][cur_col];
    colArr[cur_col] = row;

    for (let col = 0; col < 4; ++col) {
      // row행에서 몇열을 밟고 시작할지
      if (col === cur_col) continue;
      search(row + 1, col, colArr, sum);
    }
  }
}
