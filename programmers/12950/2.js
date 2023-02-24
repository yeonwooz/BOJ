function solution(arr1, arr2) {
  const answer = Array.from(Array(arr1.length), () =>
    Array(arr1[0].length).fill(0)
  );
  answer.forEach((row, i) => {
    for (let j = 0; j < row.length; ++j) {
      row[j] = arr1[i][j] + arr2[i][j];
    }
  });
  return answer;
}
