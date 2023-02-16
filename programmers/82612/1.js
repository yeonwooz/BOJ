function solution(price, money, count) {
  let budget = 0;
  let cur = 1;
  while (cur <= count) {
    budget += cur * price;
    cur++;
  }

  return Math.max(budget - money, 0);
}
