// Nqueen , 백트랙킹

function solution(n) {
  const arr = Array(n + 1).fill(0); // arr[i]는, i열에서 몇 행에 퀸이 배치되어있는지
  // 배치하지 않았음을 0으로 표기하면 편하므로 1행 1열부터 시작

  let cnt = 0;
  for (let i = 1; i <= n; ++i) {
    // arr[1]에 들어갈 수가 i인 경우
    // 즉 1열에서 i행에 퀸이 배치된 경우
    arr[1] = i;
    recur(2); // 다음에 채울 열 = 2
    arr[1] = 0;
  }

  return cnt;

  function recur(col) {
    // 이번에 할 일: arr[col] 채우기
    if (col === n + 1) {
      cnt++;
      return; // n+1열은 존재하지 않는다. 즉 탐색 완료
    }

    // arr[col-1] 까지 퀸이 채워진 상태에서, arr[col]에 퀸을 채울 수 있을지?
    // 채울 수 있는 수의 범위 : 1부터 n까지

    for (let i = 1; i <= n; ++i) {
      if (isPossible(i, col)) {
        arr[col] = i;
        recur(col + 1);
        arr[col] = 0;
      }
    }
  }

  function isPossible(row, col) {
    /* arr[col]를 i로 채울 수 있을까? => i행 col열에 퀸 놓을 수 있을까 */

    // 1. 이미 같은 행의 이전 열에 퀸이 있으면 안된다. arr에 row가 존재하면 안됨
    for (let j = 1; j < col; ++j) {
      if (arr[j] === row) return false;
    }

    // 2. arr[j], j 이 i,col과 대각선관계에 있으면 안된다
    for (let j = 1; j < col; ++j) {
      const prevRow = arr[j];
      if (Math.abs(prevRow - row) === Math.abs(j - col)) return false;
    }

    return true;
  }
}
