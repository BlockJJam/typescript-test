interface Developer{
    name: string
    skill: string;
}

interface Person{
    name: string;
    age: number
}

function introduce(): Developer | Person{
    return { name: 'Tony', age: 33, skill: 'Iron Making'}
}
var tony = introduce();
// console.log(tony.skill); // 공통된 속성만 접근이 가능, 'name'만 가능 나머지 속성은 포함이 안됨

if( (tony as Developer).skill ) {
    var skill = (tony as Developer).skill;
    console.log(skill);
} else if( (tony as Person).age ){
    var age = (tony as Person).age;
    console.log(age);
}

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer{ // isXXX()는 타입가드 만들 때 네이밍, 
    //'target is Developer' = target이 Developer 타입인지 불린결과

    return (target as Developer).skill != undefined;
}

if(isDeveloper(tony)){
    console.log(tony.skill);
     
}else {
    console.log(tony.age);
     
}

