function solution(topping) {
  const map1 = new Map();
  const map2 = new Map();
  topping.forEach(num => {
    if (map2.has(num)) {
      map2.set(num, map2.get(num) + 1);
    } else {
      map2.set(num, 1);
    }
  });

  let cnt = 0;

  for (let cut = 1; cut <= topping.length; ++cut) {
    const num = topping[cut - 1];
    if (map1.has(num)) {
      map1.set(num, map1.get(num) + 1);
    } else {
      map1.set(num, 1);
    }

    if (map2.has(num)) {
      if (map2.get(num) > 1) {
        map2.set(num, map2.get(num) - 1);
      } else {
        map2.delete(num);
      }
    }
    if (map1.size === map2.size) cnt++;
  }
  return cnt;
}
