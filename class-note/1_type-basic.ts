// string - js
// let str = 'hello';

// string - ts
let str: string = 'hello';

// number - ts
let num: number = 10;

// array - ts
let arr: Array<number> = [1,2,3];
let heroes: Array<string> = ['Capt','Thor','Hulk']
let items: number[] = [1,2,3]; // == Array<number>

// tuple - ts
let address: [string, number] = ['gangam', 100];

// object -ts
let obj: object = {};
// let person: object ={
//     name: 'capt',
//     age: 100
// };
let person: {name:string, age: number}= { // 객체를 나타내면서 key-value의 타입도 지정
    name: 'capt',
    age: 100
};

// boolean - ts
let show: boolean = true;


export = {}