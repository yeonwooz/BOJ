function solution(order) {
  const stack = [];
  const n = order.length + 1;

  let cnt = 0;
  let curNum = 1;

  while (order.length) {
    if (curNum > order[0]) {
      if (stack[stack.length - 1] === order[0]) {
        order.shift();
        stack.pop();
        cnt++;
      } else break;
    }

    while (curNum < order[0] && curNum <= n + 1) {
      stack.push(curNum++);
    }

    if (curNum === order[0]) {
      order.shift();
      curNum++;
      cnt++;
    }
  }

  return cnt;
}
