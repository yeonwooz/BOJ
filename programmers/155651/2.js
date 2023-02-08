function solution(book_time) {
  // 종료시간 기준으로 정렬한다
  book_time = selectionSort(book_time);

  // 정렬한 배열 순회, 현재 종료시간 + 10보다 시작시간이 앞인 것들을 센다(cnt)
  // max cnt 갱신, 최종 max cnt 리턴

  let maxCnt = 0;

  for (let i = 0; i < book_time.length; ++i) {
    let endTime = book_time[i][1];
    const spt = endTime.split(":");
    let hour = parseInt(spt[0]);
    let minute = parseInt(spt[1]) + 10;
    if (minute > 60) {
      minute -= 60;
      hour += 1;
    }

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

function selectionSort(arr) {
  // 선택정렬
  // 평균 시간복잡도 O(N^2)
  // 최선 시간복잡도 O(N)
  const len = arr.length;

  for (let i = 0; i < len; ++i) {
    let min = ["24:00", "24:00"];
    let minIdx = 0;
    for (let j = i; j < len; ++j) {
      if (min[1] > arr[j][1]) {
        min = arr[j];
        minIdx = j;
      }
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}

function bubbleSort(arr) {
  // 버블정렬
  // 평균 시간복잡도 O(N^2)
  // 최선 시간복잡도 O(N)
  // 그러나 실제 교체연산이 많아서 수행시간이 매우 길다
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
