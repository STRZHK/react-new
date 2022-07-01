import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/posts'
});
const getUser = (post) => axiosInstance.post('', post);
export {getUser}