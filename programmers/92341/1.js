function solution(fees, records) {
  const [bTime, bFee, pTime, pFee] = fees;
  const cars = {};
  const maxTime = 23 * 60 + 59;
  records.forEach((v) => {
    let [time, car, type] = v.split(" ");

    const [hour, minute] = time.split(":");
    time = hour * 60 + parseInt(minute);

    // 처음 조회된 차량
    if (!cars[car]) {
      cars[car] = { time: 0, car };
    }

    cars[car].type = type;

    if (type == "OUT") {
      cars[car].time += time - cars[car].lastInTime;
      return;
    }

    cars[car].lastInTime = time;
  });

  return Object.values(cars)
    .sort((a, b) => a.car - b.car)
    .map((v) => {
      // 차량이 최종적으로 나가지 않았을 때
      if (v.type == "IN") {
        v.time += maxTime - v.lastInTime;
      }

      // 기본시간을 넘지 않았을 때
      if (bTime > v.time) {
        return bFee;
      }

      return bFee + Math.ceil((v.time - bTime) / pTime) * pFee;
    });
}
