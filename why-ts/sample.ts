function add(a: number,b: number): number{
    return a+b;
}

// var result = add(10, '20'); // compile 시점에서 에러 사전 방지
var result = add(10, 20); // compile 시점에서 에러 사전 방지
result.toLocaleString();
console.log(result)
