function solution(arr1, arr2) {
  const answer = Array.from(Array(arr1.length), () =>
    Array(arr2[0].length).fill(0)
  );

  for (let i = 0; i < answer.length; ++i) {
    for (let j = 0; j < answer[0].length; ++j) {
      let compSum = 0;
      for (let col = 0; col < arr1[0].length; ++col) {
        for (let row = 0; row < arr2.length; ++row) {
          if (col !== row) continue;
          compSum += arr1[i][col] * arr2[row][j];
        }
      }
      answer[i][j] = compSum;
    }
  }
  return answer;
}
