import Users from "./components/Users/Users";
import {useState} from "react";
import {getUserPost} from "./services/user.services";
import "./main.css";
import Posts from "./components/Posts";

export default function App() {
    let [posts, setPosts] = useState([]);
    let elevate = (id) => {
        getUserPost(id).then((value) => setPosts([...value.data]))
    }
    return (
        <div className={'wrap'}>
            <div className={'UsersList'}><Users elevate={elevate}/></div>
            <hr/>
            <h2 className={'postTitle'}>Post of the User</h2>
            <div className={'postsList'}><Posts posts={posts}/></div>
        </div>
    )
}

