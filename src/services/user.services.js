let baseURL = 'https://jsonplaceholder.typicode.com/users';
const getUsers = () => fetch(baseURL).then(value => value.json());

const getUserPost = (id) => fetch(baseURL + '/' + id + '/posts').then(value => value.json());

export {getUsers, getUserPost}

