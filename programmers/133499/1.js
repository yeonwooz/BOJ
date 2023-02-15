function solution(babbling) {
  const can = ["aya", "ye", "woo", "ma"];
  let cnt = 0;

  for (let i = 0; i < babbling.length; i++) {
    let bab = babbling[i];

    for (let j = 0; j < can.length; j++) {
      if (bab.includes(can[j].repeat(2))) {
        break;
      }

      bab = bab.split(can[j]).join(" ");
    }

    if (bab.split(" ").join("").length === 0) {
      cnt += 1;
    }
  }

  return cnt;
}
