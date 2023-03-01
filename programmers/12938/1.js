function solution(n, s) {
  const element = Math.floor(s / n);
  if (element < 1) return [-1];
  return getBestSet(element, s);
}

function getBestSet(element, sum) {
  let quot = Math.floor(sum / element);
  let rest = sum % element;
  let combination = [];
  if (rest > 0) {
    combination = Array(quot).fill(element);
    combination[quot - 1] = element + rest;
    // element 가 quot개, rest가 1개
  } else {
    combination = Array(quot).fill(element);
    // element 가 quot개
  }

  return combination;
}
