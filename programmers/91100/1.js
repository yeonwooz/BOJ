function solution(number, k) {
  const stack = [];
  let top = -1;
  let cnt = 0;
  for (let c of number) {
    const num = parseInt(c);
    while (cnt < k && top >= 0 && stack[top] < num) {
      stack.pop();
      top--;
      cnt++;
    }

    stack.push(num);
    top++;
  }

  while (cnt < k) {
    stack.pop();
    top--;
    cnt++;
  }
  return stack.join("");
}
