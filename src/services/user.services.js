import axios from 'axios';

export {getUsers, getUserPost}

let axiosInstance =  axios.create({baseURL:'https://jsonplaceholder.typicode.com/users'})

const getUsers = () => axiosInstance.get('').then(value => value)

let axiosInstance1 =  axios.create({baseURL:'https://jsonplaceholder.typicode.com/posts'});
const getUserPost = (id) => axiosInstance1.get( + '/' + id).then(value => value)