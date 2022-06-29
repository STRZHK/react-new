import axios from 'axios';

let axiosInstance =  axios.create({baseURL:`https://jsonplaceholder.typicode.com/users`})

const getUsers = () => axiosInstance.get(``).then(value => value)

let axiosInstance1 =  axios.create({baseURL:`https://jsonplaceholder.typicode.com/posts`});
const getUserPost = (id) => axiosInstance1.get(`/${id}/posts`).then(value => value);

export {getUsers, getUserPost}
