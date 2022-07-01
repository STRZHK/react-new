import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'http://jsonplaceholder.typicode.com/comments'
});
const createComment = (post) => axiosInstance.post('', post);
export {createComment}