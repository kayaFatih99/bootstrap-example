// function topla(a,b) {
//     return a + b;
// }

// const topla = function topla(a,b) {
//     return a + b;
// }

// const topla = (a,b) => {
//     return a + b;
// }

/* 1. Aşama
export const topla = (a,b) => a + b;
export const cikar = (a,b) => a - b;

const hello = (name) => {
    console.log("Hello " + name);
}

export const text = 'Text';
export const user = {
    name : 'Fatih',
    surname : 'Kaya'
};
export const users = [
    {name : 'Fatih' , surname : 'Kaya'},
    {name : 'Mehmet' , surname : 'Seven'}
];


export default hello;
*/

// 2. Aşama

const topla = (a,b) => a + b;
const cikar = (a,b) => a - b;

export default (name) => {
    console.log("Hello " + name);
}

const text = 'Text';
const user = {
    name : 'Fatih',
    surname : 'Kaya'
};
const users = [
    {name : 'Fatih' , surname : 'Kaya'},
    {name : 'Mehmet' , surname : 'Seven'}
];

export {topla,cikar,text,user,users};

// Notlar :
// export tek seferde ver => export {topla,cikar,text,hello}; 
// export default => import topla from './myModule.js'; 
// export => import {topla} from './myModule.js'; 