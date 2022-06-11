function Person(name, age){
    this.name = name;
    this.age = age;
}
var capt = new Person('capt', 100); // 밑의 class와 똑같은 표현, 다만 클래스로 명시적으로 사용하기 위해 표현방식을 바꾼 것

// ES2015(ES6)
class Person{
    // 클래스 로직
    constructor(name, age){
        console.log('생성 되었습니다');
        this.name = name;
        this.age= age;
    }
}

var seho = new Person('seho', 30); // log: 생성 되었습니다
console.log(seho);

// javascript의 프로토타입
// - javascript는 프로토타입 언어다 <- 프로토타입?
// - 객체 사용에 있어서 중복되는 코드(속성)들을 줄일 수 있는 방식이 필요한데 <- 자바스크립의 프로토타입을 이용한 상속
// - XXX.__proto__ = YYY -> YYY의 속성을 상속받음
// - 이미 객체를 생성할 때, Object라는 "Built-in JS API"를 사용하고 있었던 것( Object.keys(obj), obj.hasOwnProperty()...)
// - - 배열도 마찬가지 __proto__: Array()  
// - - "Javascript Native API" 라고도 함


