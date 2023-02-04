function solution(today, terms, privacies) {
  const tmap = new Map();
  terms.forEach((el, idx) => {
    el = el.split(" ");
    tmap.set(el[0], parseInt(el[1]));
  });
  const answer = [];
  for (let i = 0; i < privacies.length; ++i) {
    const [startDay, t] = privacies[i].split(" ");
    const dur = tmap.get(t);

    const start = new Date(startDay);
    start.setMonth(start.getMonth() + dur);
    const expire = new Date(today);
    if (start <= expire) answer.push(i + 1);
  }
  return answer;
}
