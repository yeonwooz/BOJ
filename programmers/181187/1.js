// https://mentum.tistory.com/735
function solution(r1, r2) {
    let cnt = 0
    for (let x = 1; x <= r2; ++x) {   
        if (x >= r1) {
            let y = Math.sqrt(r2 ** 2 - x **2)
            cnt += Math.floor(y)     
        } else {
            let y2 = Math.sqrt(r2 ** 2 - x ** 2)   
            let y1 = Math.sqrt(r1 ** 2 - x ** 2)   
            
            const y2bottom = Math.floor(y2)
            const y1top = Math.ceil(y1)
            cnt += y2bottom - y1top + 1
        }
    }

    // x = 0
    let x = 0
    for (let y = 1; y <= r2; ++y) {
        if (r1 **2 <= x ** 2 + y ** 2 && x ** 2 + y ** 2 <= r2 **2) {
            // console.log(x,y)
            cnt++
        }        
    } 
   
    cnt *= 4
    return cnt
}