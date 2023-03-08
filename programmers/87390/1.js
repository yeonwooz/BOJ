function solution(n, left, right) {
  // i행은 i열까지는 쭉 i를 값으로 갖고, 그 이후로 1씩 증가한다
  // const arr = Array.from(Array(n+1), () => Array(n+1).fill(0))

  // for (let i = 1; i <= n; ++i) {
  //     for (let j = 1; j <= n; ++j) {
  //         if (j <= i) {
  //             arr[i][j] = i
  //         } else {
  //             arr[i][j] = arr[i][j-1] + 1
  //         }
  //     }
  // } => n^2 탐색 허용되지 않음  (실행시 에러)
  // const arr = Array(n**2+1).fill(0)
  // for (let i = 1; i <= n**2; ++i) {
  // console.log(i)
  // }
  // => n탐색도 허용되지 않음 (실행시 에러)

  const arr = [];
  for (let ptr = left; ptr <= right; ++ptr) {
    // console.log(i)
    let i = Math.floor(ptr / n); // 행
    let j = ptr % n; // 열

    if (j <= i) {
      arr.push(i + 1);
    } else {
      if (arr.length === 0) {
        arr.push(j + 1);
      } else {
        arr.push(arr[arr.length - 1] + 1);
      }
    }
  }
  return arr;
}
