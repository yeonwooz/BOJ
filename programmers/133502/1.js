function solution(ingredient) {
  const stack = [];
  let i = 0;
  let cnt = 0;
  while (ingredient[i]) {
    if (i <= 2) {
      stack.push(ingredient[i]);
      i++;
      continue;
    }
    if (ingredient[i] === 1) {
      // 마지막 빵일까?
      const c = stack.pop();
      const b = stack.pop();
      const a = stack.pop();

      if (a === 1 && b === 2 && c === 3) {
        cnt++;
      } else {
        stack.push(a);
        stack.push(b);
        stack.push(c);
        stack.push(1);
      }
    } else {
      stack.push(ingredient[i]);
    }

    i++;
  }
  return cnt;
}
