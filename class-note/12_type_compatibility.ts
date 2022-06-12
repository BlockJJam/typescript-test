// 타입 호환: 특정 타입이 다른 타입에 잘 맞는지 점검
// 구조들 타이핑과 타입스크립트에서 지원하는 규칙에 대해 학습

// interface Developer{
//     name: string;
//     skill: string;
// }

// interface Person{
//     name: string;
// }

// var dev: Developer;
// var person: Person;
// dev = person; // error: dev - Developer타입에는 속성이 name, skill이고, person = Person타입에는 name밖에 없기 때문에
// person이 더 큰 범위의 타입이기 때문에, dev에 넣을 수 없다
// 구조적으로 부분집합이기 때문에 더 작은 타입을 큰 타입의 변수에 넣을 수 없다
// person = dev; // 이 경우는 가능, 작은 타입을 포함하는 큰 타입을 넣는 것은 가능

// interface Developer{
//     name: string;
//     skill: string;
// }

// interface Person{
//     name: string;
//     skill: string;
// }

// var dev: Developer;
// var person: Person;
// dev = person; 

// 함수 타입 호환
var add = function(a: number){
    // ...
    return a;
}

var sum = function(a: number, b: number){
    return a+b;
}
// sum이 add 보다 더 큰 타입 범위이기 때문에, 마찬가지로 sum에 add를 넣을 수 있다
// 반대 상황은 성립하지 않는다(add = sum)
sum = add;
// add = sum;

// 제네릭 타입 호환
interface Empty<T>{
    // ..
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;        // empty1과 empty2는 타입이 할당되어도 데이터에 영향이 없으므로, 서로 호환이 가능
empty2 = empty1;
interface NotEmpty<T>{
    data: T;
}
var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;
// notEmpty1 = notEmpty2;  // notEmpty1 과 notEmpty2는 타입이 할당되면 속성의 타입이 서로 달라지기 때문에 타입에러가 발생
// notEMpty2 = notEmpty1;



export = {}