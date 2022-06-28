import {useEffect, useState} from "react";
import User from "../User/User";
import {getUsers, getUserPost} from "../../services/user.services";
import Posts from "../Posts/Posts";

export default function Users() {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
        }
    ,[])
    return (
        <div>
            {
                users.map(value => <User
                    key={value.id}
                    item={value}
                />)
            }
        </div>
    )
}