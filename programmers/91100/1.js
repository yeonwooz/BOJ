function solution(number, k) {
  const cnt = number.length - k;
  const combs = combination(number.split(""), cnt).sort((a, b) => {
    if (parseInt(a.join("")) < parseInt(b.join(""))) return 1;
    return -1;
  });
  return combs[0].join("");
}

function combination(arr, cnt) {
  const result = [];
  if (cnt === 1) return arr.map((v) => [v]);

  arr.forEach((value, index, arr) => {
    const fixed = value;
    const restArr = arr.slice(index + 1);
    const restCombs = combination(restArr, cnt - 1);
    const combined = restCombs.map((v) => [fixed, ...v]);
    result.push(...combined);
  });
  return result;
}
