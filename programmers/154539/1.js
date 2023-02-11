function solution(numbers) {
  const len = numbers.length;
  const answer = Array(len).fill(0);
  const stack = []; // 인덱스를 담는 스택
  for (let i = 0; i < len; ++i) {
    while (1) {
      const stacklen = stack.length;
      if (stacklen === 0) break;
      // 스택이 비어있으면(비교할 원소가 없으면) break
      if (numbers[stack[stacklen - 1]] >= numbers[i]) break;
      // 스택안의 비교할 원소보다 현재원소가 작으면 break
      answer[stack.pop()] = numbers[i];
      // 현재원소가 더 크니까 기록하고, 해당 인덱스는 이미 기록했으니 스택에서 제거
    }
    stack.push(i); // 현재인덱스도 나중에 기록해줘!
  }

  for (let idx of stack) {
    answer[idx] = -1;
  }
  return answer;
}
