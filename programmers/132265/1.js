function solution(topping) {
    const n = topping.length
    const set = new Set(topping)
    let answer = 0
    
    // 가짓수 캐싱하기
    const leftdp = [0]    // idx를 기준으로 자를때 왼쪽 가짓수
    const rightdp = [set.size]    // idx를 기준으로 자를때 오른쪽 가짓수
    
    const left = Array(n+1).fill(0)
    const right = Array(n+1).fill(0)
    
    for (let cut = 1; cut <= topping.length; ++cut) {
        left[topping[cut]]++
        right[topping[cut]]--
    }
    return answer
}