function solution(n, lost, reserve) {
  // let cnt = n - lost.length  // 체육복 도난당하지 않은 학생의 수
  // reserve 의 번호중에서 lost에도 해당하는 학생이 있다면 제거
  const filteredReserve = reserve.filter((value) => !lost.includes(value));
  lost = lost.filter((value) => !reserve.includes(value));
  reserve = filteredReserve;

  for (let i = 0; i < reserve.length; ++i) {
    const num = reserve[i];
    if (lost.includes(num - 1)) {
      lost.splice(lost.indexOf(num - 1), 1);
      // cnt++
    } else if (lost.includes(num + 1)) {
      lost.splice(lost.indexOf(num + 1), 1);
      // cnt++
    }
  }

  return n - lost.length;
}
