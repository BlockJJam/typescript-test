// function logMessage(value: any){
//     console.log(value);
// }

// logMessage('hello');
// logMessage(100);

// function logMessage(value: string | number){
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);

// 유니온 타입의 장점: 한가지 이상의 타입을 쓰고 싶을 때
function logMessage(value: string | number){
    if(typeof value === 'number'){
        // union 타입의 두번째 장점: 해당 타입의 api를 사용가능하고 자동완성까지
        value.toLocaleString()
    }
    if(typeof value === 'string'){
        value.toString()
    }
    // union 타입의 세번째 장점: 타입 가드가 가능
    throw new TypeError('value must be string or number');
}

interface Developer{
    name: string,
    skill: string
}

interface Person{
    name: string,
    age: number
}

// function askSomeone(someone: Developer | Person){
//     // Union의 기본적으로 개발자 입장에서는 모든 속성에 접근이 가능할 것으로 기대하지만,
//     // 실제 name이라는 "공통속성"만 접근가능 <- 타입 검증없이 컴파일러 입장에서는 애매한 상황을 걸러낸다
//     // 요약: 인터페이스로 union을 사용하게 되면, 공통 속성만 접근 가능
//     // someone.name
//     // someone.age
//     // someone.skill
// }

// union 으로 파라미터 타입을 지정한 함수 호출
// 2가지 타입 중에 골라서 넣을 수 있다 
// askSomeone({name: 'dev', skill: 'web'})
// askSomeone({name: 'capt',age: 100})

// &&
var capt: string & number & boolean; // never

function askSomeone(someone: Developer & Person){
    // Developer와 Person을 모두 포함한다는 의미이기 때문에 모든 속성을 가져올 수 있음
    // intersaction에서는 타입가드가 필요 없지만, 그렇다고 많이 쓰지는 않는다
    someone.name
    someone.age
    someone.skill
}
// 밑에 표현이 에러가 나는 이유: Developer와 Person를 모두 포함하는 속성을 기입해야 한다
// askSomeone({name: 'dev', skill: 'web'})
// askSomeone({name: 'capt',age: 100})





