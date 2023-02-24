// 최대공약수와 최소공배수
function solution(n, m) {
  return [gcd(n, m), lcm(n, m)];
}

const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
const lcm = (a, b) => {
  const divisor = gcd(a, b);
  return divisor * (a / divisor) * (b / divisor);
};
