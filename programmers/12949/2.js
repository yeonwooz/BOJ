function solution(arr1, arr2) {
  return arr1.map((row) =>
    // arr1의 각 행번호에 대하여
    arr2[0].map((x, y) =>
      // arr2의 각 열번호에 대하여

      row.reduce((acc, cur, idx) => acc + cur * arr2[idx][y], 0)
      // arr1의 각 행 전체에 대해 reduce한다.
      // cur과 arr2의 idx행 y열 성분과 곱하여 합산한다
    )
  );
}

/*

리듀서 함수는 네 개의 인자를 가집니다.

누산기 (acc)
현재 값 (cur)
현재 인덱스 (idx)
원본 배열 (src)

*/
