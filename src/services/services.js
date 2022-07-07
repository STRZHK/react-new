let getTodos = fetch('https://jsonplaceholder.typicode.com/todos').then(value => value.json());

let getAlbums = fetch('https://jsonplaceholder.typicode.com/albums').then(value => value.json());

let getComments = fetch('https://jsonplaceholder.typicode.com/comments').then(value => value.json());

export {getTodos, getAlbums, getComments}
