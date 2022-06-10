// interface Person{
//     name: string;
//     age: number;
// }

type Person = {
    name: string;
    age: number;
}

let seho: Person = {
    name: '세호',
    age: 30
}

type MyString = string;
var str: MyString = 'hello';

type Todo = {
    id: string;
    title: string;
    done: boolean;
}

function getTodo(todo: Todo){
    
}

// type 과 interface의 차이점
// - type 은 필드 내용을 힌트로 확인 가능
// - interface는 해당 타입이 interface임을 알 수 있고, 외부에서 가져올 때 해당 타입을 보고 싶으면 cmd + click으로 들어가서 보면된다
// - type은 확장이 불가능하지만, interface는 확장이 가능(interface 사용할 것)

export = {}