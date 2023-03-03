function solution(n, weak, dist) {
  // 크게 도는 친구부터 각각의 친구가 시계방향 / 반시계 방향으로 최대한 많이
  dist.sort((a, b) => a - b); // 오름차순 후 pop()
  let weakCnt = weak.length;
  let workerCnt = 0;
  while (dist.length) {
    if (weakCnt <= 0) break;
    const range = dist.pop();
    const fixedCnt = getMaxFixCnt(n, weak, range);
    if (fixedCnt > 0) {
      workerCnt++;
      weakCnt -= fixedCnt;
    }
  }
  return workerCnt;
}

function getMaxFixCnt(n, weak, range) {
  let maxFixCnt = 0;

  // 시계방향
  for (let i = 0; i < weak.length; ++i) {
    //weak[i] 부터 시작할 경우
    let cnt = 1;
    let cur = i + 1;

    while (cur !== i) {
      if (weak[cur] >= weak[i]) {
        if (weak[cur] - weak[i] > range) {
          break;
        }
      } else {
        if (n - weak[i] + weak[cur] > range) break;
      }
      cnt++;
      cur = (cur + 1) % weak.length;
    }

    if (cnt > maxFixCnt) {
      maxFixCnt = cnt;
    }
  }

  //     // 반시계방향
  for (let i = weak.length - 1; i >= 0; --i) {
    //weak[i] 부터 시작할 경우
    let cnt = 1;
    let cur = i + 1;

    while (cur !== i) {
      // i는 시작점(10)  cur는 9
      if (weak[cur] <= weak[i]) {
        if (weak[i] - weak[cur] > range) {
          break;
        }
      } else {
        // i는 시작점(1) cur는 10
        if (weak[i] + (n - weak[cur]) > range) break;
      }
      cnt++;
      cur = (cur - 1) % weak.length;
    }

    if (cnt > maxFixCnt) {
      maxFixCnt = cnt;
    }
  }

  return maxFixCnt;
}
