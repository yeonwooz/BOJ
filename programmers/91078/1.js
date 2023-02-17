function solution(priorities, location) {
  let front = 0;
  let rear = priorities.length - 1;
  let cnt = 1;
  while (front <= rear) {
    // console.log(priorities, front, rear, location)
    let found = false;
    for (let i = front + 1; i <= rear; ++i) {
      // curP보다 중요한 문서가 있으면 뒤로보내고, front++, rear++
      // curP보다 중요한 문서가 없으면 인쇄하고 front++
      if (priorities[i] > priorities[front]) {
        found = true;
        break;
      }
    }
    if (found) {
      priorities[++rear] = priorities[front];
      if (front === location) {
        location = rear;
      }
      delete priorities[front];
      front++;
    } else {
      // 출력!
      if (front === location) {
        break;
      } else {
        delete priorities[front];
        front++;
        cnt++;
      }
    }
  }
  return cnt;
}
