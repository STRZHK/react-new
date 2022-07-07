import {useEffect, useState} from "react";
import {getPosts} from "../services/services";
import PostOfComment from "./PostOfComment";

export default function PostComponent({post}) {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts.then(value => setPosts([...value]))
    },[])
    return (
        <div>
            {posts.map(post => <PostOfComment key={post.id} post={post}/>)}
        </div>
    )
}