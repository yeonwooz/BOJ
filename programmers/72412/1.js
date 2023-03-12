function solution(info, query) {
  const people = Array(info.length)
    .fill(0)
    .map((_, i) => i);

  const langMap = new Map();
  langMap.set("cpp", []);
  langMap.set("java", []);
  langMap.set("python", []);
  const jobMap = new Map();
  jobMap.set("backend", []);
  jobMap.set("frontend", []);
  const careerMap = new Map();
  careerMap.set("junior", []);
  careerMap.set("senior", []);
  const foodMap = new Map();
  foodMap.set("chicken", []);
  foodMap.set("pizza", []);

  const scores = [];

  for (let i = 0; i < info.length; ++i) {
    const data = info[i].split(" ");
    const [lang, job, career, food, score] = data;
    langMap.get(lang).push(i);
    jobMap.get(job).push(i);
    careerMap.get(career).push(i);
    foodMap.get(food).push(i);
    scores.push(Number(score));
  }

  query = query.map((q) => {
    q = q.split(" and ");
    const last = q.pop().split(" ");
    q.push(last[0]);
    q.push(last[1]);
    return q;
  });
  const answer = [];
  for (const q of query) {
    const [lang, job, career, food, score] = q;
    let filtered = people.filter(
      (idx) =>
        scores[idx] >= score &&
        (lang === "-" || langMap.get(lang)?.includes(idx)) &&
        (job === "-" || jobMap.get(job)?.includes(idx)) &&
        (career === "-" || careerMap.get(career)?.includes(idx)) &&
        (food === "-" || foodMap.get(food)?.includes(idx))
    );
    answer.push(filtered.length);
  }
  return answer;
}
