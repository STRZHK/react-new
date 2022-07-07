import {useEffect, useState} from "react";

import PostComponent from "../../components/PostComponent";

import {getPosts} from "../../services/services";

export default function Posts() {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts.then(value => setPosts([...value]))
    })

    return (
        <div>
            {
                posts.map(post=> <PostComponent
                    key={post.id}
                    post={post}
                />)
            }
        </div>
    )
}