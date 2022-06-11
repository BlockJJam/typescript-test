// enum Shoes{
//     NIKE,
//     ADIDAS,
//     NEWBALANCE
// }
// 특정 숫자부터 시퀀셜하게 늘어나게 하는 방법
// enum Shoes{
//     NIKE = 19, // 19부터 증가
//     ADIDAS,
//     NEWBALANCE
// }

// var myShoes = Shoes.NIKE
// console.log(myShoes) // log: 0
// console.log(Shoes.ADIDAS) // log: 1

// enum 의 속성값을 "문자열"로 나타내는 방법 = 문자형 이넘
// - 다만 속성에 모두 value를 지정해줘야한다
enum Shoes{
    NIKE = '나이키',
    ADIDAS = '아디다스',
    NEWBALANCE = '뉴발란스'
}
var myShoes = Shoes.NIKE
console.log(myShoes) // log: 0
console.log(Shoes.ADIDAS) // log: 1

// 물론 밑에 처럼 "문자열"과 시퀀셜한 숫자를 mix해서 사용가능
// enum Shoes{
//     NIKE = '나이키',
//     ADIDAS = 0,
//     NEWBALANCE
// }

// function askQuestion(answer: string){
//     if(answer === 'yes'){
//         console.log('정답입니다');
        
//     }
//     if(answer === 'no'){
//         console.log('오답입니다');
//     }
// }
// askQuestion이 문자열로 파라미터를 받다보니 다른 문자열로 인한 제한을 주지 못한다(컴파일에서)
// askQuestion('예스')
// askQuestion('노우')
// askQuestion('no')

enum Answer{
    YES = 'Y',
    NO = 'N'
}
function askQuestion(answer: Answer){
    if(answer === Answer.YES){
        console.log('정답입니다');
        
    }
    if(answer === Answer.NO){
        console.log('오답입니다');
    }
}
askQuestion(Answer.YES)
askQuestion(Answer.NO)
//askQuestion('NO') // 컴파일에서 처리






