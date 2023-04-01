function solution(plans) {
    for (let i = 0; i < plans.length; ++i) {
        const [name, start, playtime] = plans[i]
        const end = getEndTime(start, playtime)
        plans[i].push(end)
    }
    
    plans.sort((a,b) => {
        if (a[3] > b[3]) return 1
        if (a[3] < b[3]) return -1
        if (a[3] === b[3]) {
            if (a[1] > b[1]) return 1
        }
        return -1
    })
    const answer = []
    for (let i = 0; i < plans.length-1; ++i) {
        for (let j = i+1; j < plans.length; ++j) {
            if ()   
        }
    }
    
    
    return answer
}

function getEndTime(start, playtime) {
    const [hh,mm] = start.split(":").map(n => +n)
    playtime = Number(playtime)
    let hour = hh
    let min = mm + playtime
    hour += parseInt(min / 60)
    hour = hour.toString()
    min %= 60
    min = min.toString()
    
    if (hour.length === 1) hour = '0' + hour
    if (min.length === 1) min = '0' + min
    return hour + ":" + min
}