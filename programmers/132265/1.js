function solution(topping) {
  let cnt = 0;
  for (let cut = 1; cut <= topping.length; ++cut) {
    const set1 = new Set(topping.slice(0, cut));
    const set2 = new Set(topping.slice(cut));
    if (set1.size === set2.size) cnt++;
  }
  return cnt;
}
