function solution(skill, skill_trees) {
  const skillMap = new Map();
  skill.split("").forEach((s, i) => {
    skillMap.set(s, i);
  });

  let answer = 0;
  for (const skills of skill_trees) {
    const coreSkill = skills.split("").filter(c => skillMap.has(c));
    let lv = 0;
    let flag = true;

    for (let i = 0; i < coreSkill.length; ++i) {
      const s = coreSkill[i];
      if (lv === skillMap.get(s)) {
        lv++;
      } else {
        flag = false;
      }
    }
    if (flag) answer++;
  }

  return answer;
}
