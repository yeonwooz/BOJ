function solution(want, number, discount) {
  let answer = 0;

  for (let i = 0; i < discount.length; ++i) {
    const map = new Map();
    for (let k = 0; k < want.length; ++k) {
      map.set(want[k], number[k]);
    }

    for (let j = 0; j < 10; ++j) {
      if (i + j >= discount.length) break;
      if (map.get(discount[i + j]) > 1) {
        map.set(discount[i + j], map.get(discount[i + j]) - 1);
      } else if (map.get(discount[i + j]) === 1) {
        map.delete(discount[i + j]);
      }
    }
    if (map.size === 0) answer++;
  }

  return answer;
}
