function solution(n) {
  /*
    3까지 가려면
    1. costs[2] 에서 1만큼 점프하거나
    2. costs[1] 에서 2로 순간이동 후 점프
    
    
    
    i까지 가는 최소비용은, 
    1 -> 2 -> 4 ... < i
    2 -> 4 -> 8 ...  < i
    이렇게 해서 각 케이스 비교해야 함 
    
    // 2500  1250  625  -> -1
    39  -> -1
    19 -> -1
    9 -> -1
    */
  let cost = 0;
  while (n > 0) {
    if (n % 2) {
      n--;
      cost++;
    } else {
      n /= 2;
    }
  }

  return cost;
}