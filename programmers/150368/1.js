// 문제 풀이
function solution(users, emoticons) {
  const userlen = users.length;
  const elen = emoticons.length;
  const rateMap = new Map();
  const priceMap = new Map();

  for (let i = 0; i < userlen; ++i) {
    //i+1 번 고객의 구매기준할인율
    rateMap.set(i + 1, users[i][0]);

    //i+1 번 고객의 가입기준비용
    priceMap.set(i + 1, users[i][1]);
  }

  let subscribers = 0;
  let revenues = 0;

  // 각 할인율조합 완전탐색
  // rateMap.forEach((value, key) => console.log(value,key))
  const dcRates = [10, 20, 30, 40];
  const permutations = permutation(dcRates, elen);
  for (let perm of permutations) {
    // const dcEmoticons = emoticons.map((p, i) => p * (1 - comb[i] * 0.01))
    const usersCarts = Array(userlen + 1).fill(0); // 각 유저의 총 구매액

    // console.log(dcEmoticons)
    for (let i = 0; i < elen; ++i) {
      const rate = perm[i];

      rateMap.forEach((targetRate, userNum) => {
        if (targetRate <= rate) {
          const price = emoticons[i] * (1 - rate * 0.01);
          usersCarts[userNum] += price;
        }
      });
    }

    let curSubscribers = 0;
    let curRevenues = 0;

    for (let i = 1; i < usersCarts.length; ++i) {
      const totalPayment = usersCarts[i];
      if (totalPayment >= priceMap.get(i)) {
        curSubscribers += 1;
      } else {
        curRevenues += totalPayment;
      }
    }

    if (curSubscribers > subscribers) {
      subscribers = curSubscribers;
      revenues = curRevenues;
    } else if (curSubscribers === subscribers) {
      revenues = revenues > curRevenues ? revenues : curRevenues;
    }
  }
  return [subscribers, revenues];
}

function permutation(arr, selectNum) {
    // 중복순열
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr;
    const permutationArr = permutation(restArr, selectNum - 1);
    const combineFix = permutationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
}
