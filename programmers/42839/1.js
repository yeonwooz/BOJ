function solution(numbers) {
  let answer = 0;
  for (let cnt = 1; cnt <= numbers.length; ++cnt) {
    let combs = permutaion(numbers.split(""), cnt);
    combs = combs.filter((v, i) => combs.indexOf(v) === i);
    for (let comb of combs) {
      if (!comb) continue;
      const strnum = comb;
      if (isPrime(parseInt(strnum))) answer++;
    }
  }
  return answer;
}

function permutaion(arr, cnt) {
  let result = [];
  if (cnt === 1) return arr.map((v) => (v > 0 ? v : ""));
  arr.forEach((value, idx, arr) => {
    const fixed = value;
    let restArr = arr.filter((_, i) => i != idx);
    const restCombs = permutaion(restArr, cnt - 1);
    let combined = restCombs.map((v) => [...v, fixed]);
    for (let comb of combined) {
      if (comb.length === cnt) result.push(comb);
    }
  });
  return result.map((v) => v.join(""));
}

function isPrime(n) {
  if (n === 1) return false;
  let i = 2;
  while (i * i <= n) {
    if (n % i === 0) return false;
    i++;
  }
  return true;
}
