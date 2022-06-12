// 타입추론 기본1

var abc = 'abc';

function getB(b = 10) { // default: 10
    var c = '10';
    return b + c;
}

// getB('b');
console.log(getB(10));
;
// getB(true);

// 타입추론 기본2 - 인터페이스와 제네릭을 이용한 타입 추론
// interface Dropdown<T>{
//     value: T;
//     title: string;
// }

// var shoppingItem: Dropdown<string> ={
//     value: "Nike",
//     title: 'hello'
// }

// 타입 추론 기본 3 - 복잡한 구조에서의 타입 추론
interface Dropdown<T>{
    value: T;
    title: string;
}

// DetailedDropdown으로 넘어온 타입 -> Dropdown 속성 타입으로도 전달
interface DetailedDropdown<K> extends Dropdown<K>{
    description: string;
    tag: K;
}

var detailedItem: DetailedDropdown<number>= {
    title: "hi",
    description: 'ab',
    tag: 1,
    value: 1
}

// Best Common Type
// - 몇개의 서로다른 타입의 원소를 배열이 가지고 있다면, 타입 추론을 어떻게 할까?
var arr1 = [1,2,3]; // number[]
var arr2 = [1,2,true] // (number | boolean)[]
var arr3 = [1,'2',true] // (number | string | boolean)[]
