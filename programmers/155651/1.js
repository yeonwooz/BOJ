function solution(book_time) {
  // 종료시간 기준으로 정렬한다
  book_time = bsort(book_time);

  // 정렬한 배열 순회, 현재 종료시간 + 10보다 시작시간이 앞인 것들을 센다(cnt)
  // max cnt 갱신, 최종 max cnt 리턴

  let maxCnt = 0;

  for (let i = 0; i < book_time.length; ++i) {
    let endTime = book_time[i][1];
    const spt = endTime.split(":");
    let hour = parseInt(spt[0]);
    let minute = parseInt(spt[1]) + 10;
    // console.log(hour, minute)
    if (minute > 60) {
      minute -= 60;
      hour += 1;
    }

    // endTime  = hour + ":" + minute
    // console.log(endTime)
    let cnt = 1;
    for (let j = i + 1; j < book_time.length; ++j) {
      const startTime = book_time[j][0];
      const jspt = startTime.split(":");
      const jhour = parseInt(jspt[0]);
      const jminute = parseInt(jspt[1]);

      if (jhour < hour) cnt++;
      if (hour === jhour && jminute < minute) cnt++;
    }
    maxCnt = Math.max(maxCnt, cnt);
  }

  return maxCnt;
}

function bsort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; ++i) {
    for (let j = len - 1; j >= i; --j) {
      if (arr[i][1] > arr[j][1]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}
