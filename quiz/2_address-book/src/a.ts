// function fetchItems(): string[]{
//     var items = ['a','b','c'];
//     return items;
// }
// let result = fetchItems();
// console.log(result);

function fetchItems(): Promise<string[]>{
    var items = ['a','b','c'];
    return new Promise((resolve) => {
        resolve(items);
    });
}

fetchItems().then(response =>{
    console.log(response);
})