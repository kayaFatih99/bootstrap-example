import axios from "axios";

async function getData(user_id) {
    const {data : users} = await axios("https://jsonplaceholder.typicode.com/users/"+user_id);
    const {data : post} = await axios("https://jsonplaceholder.typicode.com/posts?userId="+user_id);

    return console.log("Users : ",users,"Post :",post);     
};

export default getData;