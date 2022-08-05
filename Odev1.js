import axios from "axios";

export async function getData(userID) {
    const {data:users} = await axios("https://jsonplaceholder.typicode.com/users/"+ userID);
    const {data:post} = await axios("https://jsonplaceholder.typicode.com/posts?userId="+ userID);

console.log("Users", users, "Posts", post)
}


