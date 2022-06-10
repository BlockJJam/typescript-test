// function sum(a: number,b: number) {
//     return a + b;
// }
// sum(10, 20);
function add() {
    return 10;
}
// 함수에 타입을 정의하는 방식
function sum(a, b) {
    return a + b;
}
// sum(10,20,30,40,50); // ts에서는 30부터는 받을 수 없다는 컴파일 시점에서 에러 처리
// 함수의 옵셔널 파라미터 -> "?" 사용
function log(a, b) {
    return console.log(a + b);
}
log('hello world');
log('hello ts', '0');
