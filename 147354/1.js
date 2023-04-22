function solution(data, col, row_begin, row_end) {
  data.sort((row1, row2) => {
    if (row1[col - 1] < row2[col - 1]) return -1;
    if (row1[col - 1] > row2[col - 1]) return 1;
    if (row1[0] < row2[0]) return 1;
    return -1;
  });

  let result = 0;
  for (let i = row_begin - 1; i <= row_end - 1; ++i) {
    let s_i = 0;
    for (let j = 0; j < data[i].length; ++j) {
      s_i += data[i][j] % (i + 1);
    }
    if (i === row_begin - 1) {
      result = s_i;
    } else {
      result = result ^ s_i;
    }
  }
  return result;
}
