// 별 찍기

let count = 1

for(let i = 5; i > 0; i--){
    let star = ''
    for(let j = 0; j < i; j++){
        star += ' '
    }
    for(let j = 0; j < count; j++){
        star += '*'
    }
    count += 2
    console.log(star)
}