// function logText(text){
//     console.log(text);
//     return text;
// }
// logText('test');
// logText(100);
// logText(true);

// 호출하는 시점의 타입을 추론해서 해당 타입의 값을 리턴까지 해준다
// function logText<T>(text: T): T{
//     console.log(text);
//     return text
// }

// logText<string>('hi');
// logText<number>(100); 

// 기본 타입 정의 방식 vs 제네릭 - 함수 중복 선언의 단점

// function logText(text){
//     console.log(text);
//     text.split('').resverse().join(''); // text가 string일 때만 가능
//     return text;
// }
// logText('a'); logText(10); // 모두 가능한 이유: text 파라미터가 any타입

// 다른 타입도 받고 싶으면?
// - 함수 여러개 생성
// function logText(text: string){
//     console.log(text);
//     // text.split('').resverse().join(''); // text가 string일 때만 가능
//     return text;
// }

// function logNumber(num: number){
//     console.log(num);
//     return num;
// }

// logText('a');
// logNumber(10);

// 위 방식이 유지보수 측면에서 좋을까?
// - Union으로 해결해본다면?
// function logText(text: string | number){
//     console.log(text);
//     // 문제점 1: string과 number의 교집합에 대한 프리뷰만 제공됨
//     // 문제점 2: return 받는 값에 대한 타입도 string | number ( 만약, split을 사용하고 싶어도, 확실하게 return 값이 string타입이 아니면 컴파일시점에서 걸러짐)
//     return text;
// }

// logText('a');
// logText(10);

// 위 방식 또한 공통 속성으로 인해 해결되지 못하는 문제점들(위에 거론된)이 있다
// - 제네릭으로 처리해본다면?

function logText<T> (text: T) :T{
    console.log(text);
    return text;
}

const a = logText<string>('a'); // 함수 호출 시점에서, 어떤 타입으로 쓸 것인지 지정됨
const b = logText<number>(10);
const t = logText<boolean>(true);
// 필드가 각 타입에 대한 프리뷰를 제공받고, 타입 검증 또한 가능하며, 유지보수 측면에서도 코드의 중복이나 유연성이 보장됨
