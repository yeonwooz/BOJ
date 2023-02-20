function solution(arrayA, arrayB) {
  // 배열길이 최대 500000 => 시간복잡도 logN, N, nLogN까지 허용
  // a 탐색범위 최대 100000000 => logN, N 까지 허용
  // (https://wooono.tistory.com/481)
  let maxA = Math.max(Math.max(...arrayA), Math.max(...arrayB));

  let a = maxA;
  let found = false;
  while (a >= 2) {
    let aFlag = [0, 0]; // 없는 것, 있는 것
    for (let i of arrayA) {
      // 나눌수있고 없고
      if (aFlag[0] && aFlag[1]) break;
      if (i % a) {
        aFlag[0]++;
      } else {
        aFlag[1]++;
      }
    }

    let bFlag = [0, 0];
    for (let j of arrayB) {
      // 나눌수있고 없고
      if (bFlag[0] && bFlag[1]) break;
      if (j % a) {
        bFlag[0]++;
      } else {
        bFlag[1]++;
      }
    }
    if (
      (aFlag[0] && !aFlag[1] && !bFlag[0] && bFlag[1]) ||
      (!aFlag[0] && aFlag[1] && bFlag[0] && !bFlag[1])
    ) {
      found = true;
      break;
    }
    a--;
  }
  return found ? a : 0;
}
