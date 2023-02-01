// JadenCase 문자열 만들기
function solution(s) {
    let answer = []

    const words = s.split(' ')
    for (let word of words) {
        if (word === '') {
         answer.push(word)
        } else {
            word = word.toLowerCase()
            if (!parseInt(word[0])) {
                word = word[0].toUpperCase() + word.slice(1)
            } 
            answer.push(word) 
        }  
    }
    return answer.join(' ')
}