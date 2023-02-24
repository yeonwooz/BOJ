function solution(arr1, arr2) {
  const answer = Array.from(Array(arr1.length), () =>
    Array(arr1[0].length).fill(0)
  );
  return answer.map((row, i) => {
    const sumArr = [];
    for (let j = 0; j < row.length; ++j) {
      sumArr.push(arr1[i][j] + arr2[i][j]);
    }
    return sumArr;
  });
}
