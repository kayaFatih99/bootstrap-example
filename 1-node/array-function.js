// const users = ["Mehmet","Ahmet","Fatih"]
const users = [
    {name : "Mehmet", age : 18},
    {name : "Mehmet", age : 30},
    {name : "Fatih", age : 23}
]

/*
    push
    map
    find
    filter
    some
    every
    includes
*/

// push
// users.push("Ayşe");
// users.push("Fatma");
// console.log(users);

// map
// short map => users.map((item) => console.log(item))
// users.map((item) => {
//     console.log(item.name);
// });

// find
// const resultFind = users.find((item) => item.name === "Mehmet" && item.age > 20);
// console.log(resultFind)

// filter
// const resultFilter = users.filter(({name,age}) => name === "Mehmet" && age > 10);
// console.log(resultFilter)

// some => result false true (tüm elemanların içerisinde bir tanesi geçerli koşulu sağlamasını bekler.)
// const some = users.some((item) => item.age === 18);
// console.log(some)

// every => result false true (tüm elemanların koşulu sağlamasını bekler.)
// const every = users.every((item) => item.age > 10);
// console.log(every)

// includes => result false true (var mı yokmu kontrolü sağlar.)
const meyveler = ['elma','armut','muz']
console.log(meyveler.includes("muz"))

