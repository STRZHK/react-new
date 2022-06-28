import {useEffect, useState} from "react";
import User from "../User/User";
import {getUsers} from "../../services/user.services";


export default function Users({getPostId}) {
    let [users, setUsers] = useState([]);
    useEffect(() => {
            getUsers().then((value) => setUsers([...value.data]))
        }
    ,[])
    return (
        <div>
            {
                users.map(value => <User
                    key={value.id}
                    item={value}
                    getPostId={getPostId}
                />)
            }
        </div>
    )
}