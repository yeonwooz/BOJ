function solution(arr1, arr2) {
  const answer = Array.from(Array(arr1.length), () =>
    Array(arr2[0].length).fill(0)
  );

  for (let i = 0; i < answer.length; ++i) {
    for (let j = 0; j < answer[0].length; ++j) {
      let compSum = 0;
      for (let k = 0; k < arr1[0].length; ++k) {
        compSum += arr1[i][k] * arr2[k][j];
      }
      answer[i][j] = compSum;
    }
  }
  return answer;
}
