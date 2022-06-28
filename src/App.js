import Users from "./components/Users/Users";
import {useState} from "react";
import {getUserPost} from "./services/user.services";

export default function App() {
    let [posts, setPosts] = useState([]);
    let getPostId = (id)=>{
        getUserPost(id).then((value) => setPosts([...value]))
    }
    return (
        <div>
            <h2>Post of the User</h2>
            {
                posts.map(value => <div>{value.title}</div>)
            }
            <hr/>
            <br/>
            <Users getPostId={getPostId}/>

        </div>
    )
}

