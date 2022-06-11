class Person{
    // 키워드까지 사용가능
    private name: string;
    public age: number;
    readonly log: string; //읽기만 가능

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

export = {}