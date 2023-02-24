function solution(n) {
  return eratos(n).filter((x) => x).length;
}

function eratos(n) {
  const arr = [0, 0, ...Array(n - 1).fill(1)]; // 모두 소수로 시작
  for (let i = 2; i * i <= n; ++i) {
    for (let j = 2 * i; j <= n; j += i) {
      arr[j] = 0;
    }
  }

  return arr;
}
