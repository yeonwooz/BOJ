function solution(n, m, section) {
    let cnt = 0
    let max = 0
    for (let i = 0; i < section.length; ++i) {
        if (section[i] < max) continue
        cnt++   
        max = section[i] + m
    }
    return cnt
} 