function solution(n, k) {
  // k진수: k보다 작은 수로만 이루어진다
  // 소수 : 2이상의 수 중에서, 약수가 1과 자기자신인 수 (10진법 기준)
  const s = n.toString(k);
  const len = s.length;
  if (len === 1 && isPrime(parseInt(s))) return 1;

  let cnt = 0;
  const arr = s.split("0");
  for (let i = 0; i < arr.length; ++i) {
    if (!arr[i]) continue;
    if (isPrime(parseInt(arr[i]))) cnt++;
  }
  return cnt;
}

function isPrime(n) {
  if (n === 1) return false;
  let i = 2;
  while (i * i <= n) {
    if (!(n % i)) return false;
    i++;
  }
  return true;
}
