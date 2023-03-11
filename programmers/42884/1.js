function solution(routes) {
  // end기준 sort
  // end가 같으면 start기준 sort
  routes.sort((a, b) =>
    a[1] < b[1] ? -1 : a[1] === b[1] ? (a[0] < b[0] ? -1 : 1) : 1
  );

  let camCnt = 1;
  let curEnd = routes[0][1];
  for (let i = 1; i < routes.length; ++i) {
    const [start, end] = routes[i];
    if (start > curEnd) {
      camCnt++;
      curEnd = end;
    }
  }
  return camCnt;
}
