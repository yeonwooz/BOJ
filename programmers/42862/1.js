function solution(n, lost, reserve) {
  // reserve 의 번호중에서 lost에도 해당하는 학생이 있다면 제거
  const filteredReserve = reserve.filter((value) => !lost.includes(value));
  lost = lost.filter((value) => !reserve.includes(value));
  reserve = filteredReserve;

  lost.sort((a, b) => a - b);
  const lostLen = lost.length;
  let cnt = n - lostLen;

  for (let i = 0; i < lostLen; ++i) {
    if (reserve.length === 0) break;
    const num = lost[i];
    if (reserve.includes(num - 1)) {
      reserve.splice(reserve.indexOf(num - 1), 1);
      cnt++;
    } else if (reserve.includes(num + 1)) {
      reserve.splice(reserve.indexOf(num + 1), 1);
      cnt++;
    }
  }

  return cnt;
}
