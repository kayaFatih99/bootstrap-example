// setTimeout(() => {
//     console.log('Fatih Kaya')
// }, 5000);

// setInterval(() => {
//     console.log('Fatih Kaya')
// }, 1000);

// const sayHi = (cb) => {
//     cb();
// };
// sayHi(() => {
//     console.log('Hello!!!')
// });

////////////////////////////////////////////

import fetch from "node-fetch";
import axios from "axios";

// fetch("https://jsonplaceholder.typicode.com/users").then((data) => data.json()).then((users) => { console.log("Users : " , users)
//     fetch("https://jsonplaceholder.typicode.com/posts/1").then((data) => data.json()).then((posts) => {console.log("Post 1 : " , posts)
//     fetch("https://jsonplaceholder.typicode.com/posts/2").then((data) => data.json()).then((data) => console.log("Post 2 : " , data))
// });
// });

// async function getData() {
//     const users = await( await fetch("https://jsonplaceholder.typicode.com/users")).json();
//     const post1 = await( await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
//     const post2 = await( await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();
//     console.log("Users : ",users);
//     console.log("Users : ",post1);
//     console.log("Users : ",post2);
// };
// getData();

// (() => {
//     console.log('Selam ben Fatih Kaya')
// })();

// (async () => {
//     const {data:users} = await axios("https://jsonplaceholder.typicode.com/users");
//     const {data:post1} = await axios("https://jsonplaceholder.typicode.com/posts/1");
//     const {data:post2} = await axios("https://jsonplaceholder.typicode.com/posts/2");
//     console.log("Users : ",users);
//     console.log("Users : ",post1);
//     console.log("Users : ",post2);
// })();

////////////////////////////////////////////

// const getComments = (number) => {
//     return new Promise((resolove, reject) => {
//         if (number === 1) {
//             resolove({text : 'Selam dünya ben Fatih!'});
//         }
//         reject("Bir sorun var...")
//     });
// };
// getComments(2)
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e));

const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/users");

        resolve(data);
        // reject('Bir sorun oluşturdu...')
    });
};
const getPost = (postId) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts/"+postId);
     resolve(data);
    });
};
   

// (async () => {
//     try{
//         const users = await getUsers();
//         const post = await getPost(1);
//         console.log(users);
//         console.log(post);
//     } catch (e) {
//         console.log(e)
//     }
// })();

Promise.all([getUsers(), getPost(1)]).then(console.log).catch(console.log);