function solution(arrayA, arrayB) {
  // 배열길이 최대 500000 => 시간복잡도 logN, N, nLogN까지 허용
  // a 탐색범위 최대 100000000 => logN, N 까지 허용
  // (https://wooono.tistory.com/481)
  // 유클리드 호제법 : a % b -> 0이면 b가 gcd, 나머지가 있으면 gcd(b, a % b)

  let a1 = getGcd(arrayA, arrayB);
  let a2 = getGcd(arrayB, arrayA);
  return Math.max(a1, a2);
}

function getGcd(targetArr, counterArr) {
  // targetArr, counterArr의 원소들에 대해 gcd를 각각 구한다
  // gcd중 하나라도 1이면 return 0
  // targetArr의 gcd가 counterArr 중 하나라도 나눌 수 있으면 0
  // return gcd
  const gcdFunc = (a, b) => (a % b === 0 ? b : gcdFunc(b, a % b));
  let gcd = 1;
  for (let i = 0; i < targetArr.length - 1; ++i) {
    const max = Math.max(targetArr[i], targetArr[i + 1]);
    const min = Math.min(targetArr[i], targetArr[i + 1]);
    gcd = Math.max(gcd, gcdFunc(max, min));
  }
  if (gcd === 1) return 0;
  for (let i = 0; i < counterArr.length; ++i) {
    if (counterArr[i] % gcd === 0) return 0;
  }

  return gcd;
}
