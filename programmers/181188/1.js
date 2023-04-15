function solution(targets) {
    targets.sort((a,b) => {
        if (a[1] < b[1]) return -1
        if (a[1] > b[1]) return 1
        if (a[0] < b[0]) return -1
        return 1
    })
    let cnt = 0
    let curPos = -1
    for (const target of targets) {
        const [l,r] = target
        if (curPos <= l) {
            cnt++
            curPos = r
        }  
    }
    return cnt
}