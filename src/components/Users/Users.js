import {useEffect, useState} from "react";

export default function Users() {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value])
            })
        }
    )
    return (
        <div>
            {
                users.map(value => console.log(value))
            }
        </div>
    )
}