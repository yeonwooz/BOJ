function solution(order) {
  const stack = [];
  const n = order.length + 1;
  let orderIdx = 0;

  let cnt = 0;
  let curNum = 1;

  while (orderIdx < n && order[orderIdx]) {
    if (curNum > order[orderIdx]) {
      if (stack[stack.length - 1] === order[orderIdx]) {
        orderIdx++;
        stack.pop();
        cnt++;
      } else break;
    }

    while (curNum < order[orderIdx]) {
      stack.push(curNum++);
    }

    if (curNum === order[orderIdx]) {
      orderIdx++;
      curNum++;
      cnt++;
    }
  }

  return cnt;
}
