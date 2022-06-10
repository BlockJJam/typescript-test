let arr = [
    {gender: 'male', name:'john'},
    {gender: 'female', name:'john2'},
    {gender: 'male', name:'john3'},
    {gender: 'female', name:'john4'}
]

const filtered = arr.filter((item) => item.gender == 'female')
console.log(filtered)