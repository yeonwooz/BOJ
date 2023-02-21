function solution(numbers) {
  let answer = 0;
  for (let cnt = 1; cnt <= numbers.length; ++cnt) {
    let combs = combination(numbers.split(""), cnt);
    combs = combs
      .map((v, i) => {
        const splitted = v.split("0");
        let s = "";
        for (i of splitted) {
          s += i;
        }
        return s;
      })
      .filter((v, i) => combs.indexOf(v) === i);
    for (let comb of combs) {
      const strnum = comb;
      if (isPrime(parseInt(strnum))) answer++;
      if (comb.length > 1) {
        const reversed = comb.split("").reverse().join("");
        if (isPrime(parseInt(reversed))) answer++;
      }
    }
  }
  return answer;
}

function combination(arr, cnt) {
  let result = [];
  if (cnt === 1) return arr.map((v) => v);
  arr.forEach((value, idx, arr) => {
    const fixed = value;
    const restArr = arr.slice(idx + 1);
    const restCombs = combination(restArr, cnt - 1);
    const combined = restCombs.map((v) => [fixed, ...v]);
    result.push(...combined);
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
