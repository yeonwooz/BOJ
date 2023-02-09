function solution(commands) {
  const valuemap = new Map(); // ex. value1, ["2_3", "3_4"] -> indexof, splice로 제거 / push로 삽입

  const table = Array(51).fill(Array(51).fill({ cur: "", history: [] }));

  const answer = [];
  let cmd, r, c, r1, c1, r2, c2, value, value1, value2;

  for (let str of commands) {
    const arr = str.split(" ");
    switch (arr[0]) {
      case "PRINT":
        [cmd, r, c] = arr;
        answer.push(table[r][c].cur === "" ? "EMPTY" : table[r][c].cur);
        break;

      case "UPDATE":
        if (arr.length === 4) {
          [cmd, r, c, value] = arr;
          table[r][c].cur = value;

          const curCell = r + "_" + c;
          if (!valuemap.get(value)) {
            valuemap.set(value, [curCell]);
          } else {
            valuemap.get(value).push(curCell);
          }
        } else if (arr.length === 3) {
          [cmd, value1, value2] = arr;

          const valArr = valuemap.get(value1);
          for (let i = valArr.length - 1; i >= 0; --i) {
            const val = valArr[i];
            const [r, c] = val.split("_").map((x) => parseInt(x));
            table[r][c].cur = value2;
            valArr.splice(i, 1);

            if (!valuemap.get(value2)) {
              valuemap.set(value2, [val]);
            } else {
              valuemap.get(value2).push(val);
            }
          }
        }
        break;

      case "MERGE":
        [cmd, r1, c1, r2, c2] = arr;
        if (r1 === r2 && c1 === c2) break;

        table[r1][c1].history.push(table[r1][c1].cur);
        table[r2][c2].history.push(table[r2][c2].cur);

        value1 = table[r1][c1].cur;
        value2 = table[r2][c2].cur;

        if (value1 && !value2) {
          table[r2][c2].cur = value1;

          if (!valuemap.get(value1)) {
            valuemap.set(value, [r2 + "_" + c2]);
          } else {
            valuemap.get(value).push(r2 + "_" + c2);
          }
        }

        if (!value1 && value2) {
          table[r1][c1].cur = value2;

          if (!valuemap.get(value2)) {
            valuemap.set(value, [r1 + "_" + c1]);
          } else {
            valuemap.get(value).push(r1 + "_" + c1);
          }
        }

        if (value1 && value2) {
          table[r2][c2].cur = value1;

          if (!valuemap.get(value1)) {
            valuemap.set(value, [r2 + "_" + c2]);
          } else {
            valuemap.get(value).push(r2 + "_" + c2);
          }
        }

        break;

      case "UNMERGE":
        [cmd, r, c] = arr;
        const history = table[r][c].history;
        if (history.length > 1) {
          table[r][c].cur = history[0];
          table[r][c].history = [];
        }

        break;
    }
  }
  return answer;
}
