function solution(fees, records) {
  const [btime, bfee, ptime, pfee] = fees;
  records = isort(records);

  const answer = [];
  let prevAt = null;
  let prevCarNum = null;
  let prevType = null;
  let accumTime = 0;

  const len = records.length;

  for (let i = 0; i < len; ++i) {
    let [at, carNum, type] = records[i].split(" ");
    let [curT, curM] = at.split(":");
    if (len === 1) {
      accumTime += (23 - parseInt(curT)) * 60 + 59 - parseInt(curM);
      break;
    }

    if (i > 0) {
      let [prevT, prevM] = prevAt.split(":");

      if (prevType === "IN" && type === "IN") {
        // 이전 차량에 대해 23:59로 계산해야 함
        accumTime += (23 - parseInt(prevT)) * 60 + 59 - parseInt(prevM);
      } else if (prevType === "IN" && type === "OUT") {
        accumTime +=
          (parseInt(curT) - parseInt(prevT)) * 60 +
          parseInt(curM) -
          parseInt(prevM);
      }

      if (i === len - 1 && type === "IN") {
        accumTime += (23 - parseInt(curT)) * 60 + 59 - parseInt(curM);
      }

      if (prevCarNum != carNum) {
        if (accumTime <= btime) {
          answer.push(bfee);
        } else {
          const payment = bfee + Math.ceil((accumTime - btime) / ptime) * pfee;
          answer.push(payment);
        }
        accumTime = 0;
      }
    }

    prevAt = at;
    prevCarNum = carNum;
    prevType = type;
  }

  if (accumTime) {
    if (accumTime <= btime) {
      answer.push(bfee);
    } else {
      const payment = bfee + Math.ceil((accumTime - btime) / ptime) * pfee;
      answer.push(payment);
    }
    accumTime = 0;
  }
  return answer;
}

function isort(records) {
  // 삽입정렬
  const len = records.length;

  for (let i = 0; i < len - 1; ++i) {
    let j = i;
    while (j >= 0) {
      if (
        parseInt(records[j].split(" ")[1]) >
        parseInt(records[j + 1].split(" ")[1])
      ) {
        [records[j], records[j + 1]] = [records[j + 1], records[j]];
      }
      j--;
    }
  }
  return records;
}
