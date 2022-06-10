import { ALPN_ENABLED } from "constants";

interface User{
    id: number;
    name: string;
    age: number;
}

let seho: User ={
    id: 1,
    name: "jjm",
    age: 10
}

function getUser(user: User){
    console.log(user);
}

const capt = {
    name: 'capt',
    id:1,
    age:10,
    no:1
}
getUser(capt); // User의 스펙에 추가되는 필드는 받아들인다

// 함수의 스펙(구조)에 인터페이스를 활용(custom lib를 만들거나, 협업에서 규칙을 명시할 때 사용하기 좋음)
interface SumFunction{
    (a: number, b: number): number;
}


let sum: SumFunction;
sum = function(a:number, b:number){
    return a+b;
}

// 인덱싱
interface StringArray{
    [index:number]: string
}

let arr: StringArray = ['a','b','c']
// arr[0] = 10; // 'a', 배열의 인덱스는 숫자다 <- interface에 지정할 수 있다
// 위의 10은 string이 아니기 때문에 error
// arr['ab'] = '12'; 
// 위의 'ab'의 인덱싱 type이 맞지 않기 때문에 에러

// 딕셔너리 패턴
interface StringRegexDictionary{
    [key: string]: RegExp;

}

let obj: StringRegexDictionary = {
    // sth: /abc/,
    // cssFile: 'css' // 오른쪽 value가 RegExp 타입이 아니기 때문
    cssFile: /\.css$/,
    jsFile: /\.js$/
}
// obj['cssFile'] = 'a';

Object.keys(obj).forEach((value)=>{})

// 인터페이스 확장
interface Person{
    name: string;
    age: number;
}

interface Developer extends Person{
    language: string;
}

let ironman : Developer = {
    language: 'ts',
    name: 'ironman',
    age: 100
}
