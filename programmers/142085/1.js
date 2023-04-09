// https://velog.io/@kwb020312/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%94%94%ED%8E%9C%EC%8A%A4-%EA%B2%8C%EC%9E%84
function solution(n, k, enemy) {
    const soldiers =  n
    const superpass = k
    const enemyLen = enemy.length
    let s = 0
    let e = enemyLen
    let mid = parseInt((s + e)/2)  // 몇번째 라운드에서 끝날까?

    while (s <= e) {
        // mid번째 라운드에서 끝나는 것이 가능할까?
        const curSlice = enemy.slice(0,mid).sort((a,b) => b-a)
        let k = superpass
        const aliveEnemy = curSlice.reduce((acc,cur) => {
            if (k > 0) {
                k--
                return acc
            }
            return acc+cur
        }, 0)
        if (soldiers-aliveEnemy >= 0 && k >= 0) {
            s = mid + 1
        } else {
            e = mid - 1
        }
        mid = parseInt((s + e)/2) 
        
    }
    
    return s-1
}