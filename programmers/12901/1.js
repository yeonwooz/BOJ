function solution(a, b) {
    let dayCnt = b
    const days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    for (let i = 1; i < a; ++i) {
        dayCnt += days[i]
    }
    const dayNames = ['THU','FRI','SAT','SUN','MON','TUE','WED']
    return dayNames[dayCnt % 7]
}