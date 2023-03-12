function solution(info, query) {
  // info = info.map(data => data.split(' '))
  // query = query.map(q => {
  //     q = q.split(' and ')
  //     const last = q.pop().split(' ')
  //     q.push(last[0])
  //     q.push(last[1])
  //     return q
  // })
  const answer = [];
  for (let q of query) {
    q = q.split(" and ");
    const last = q.pop().split(" ");
    q.push(last[0]);
    q.push(last[1]);

    let cnt = 0;
    for (let data of info) {
      data = data.split(" ");
      const len = data.length;
      for (let i = 0; i < len; ++i) {
        if (i < len - 1) {
          if (q[i] === "-") continue;
          if (data[i] !== q[i]) break;
        }
        if (i === len - 1 && Number(data[i]) >= Number(q[i])) {
          cnt++;
        }
      }
    }
    answer.push(cnt);
  }
  return answer;
}
