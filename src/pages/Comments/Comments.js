import {useEffect, useState} from "react";

import {Outlet} from "react-router-dom";

import {getComments} from "../../services/services";

import CommentComponent from "../../components/CommentComponent";

export default function Comments() {

    let [comments, setComments] = useState([]);

    useEffect( () => {
        getComments.then((value)=> setComments([...value]))
    },[])
    return (
        <div>
            {
                comments.map(comment=> <CommentComponent
                key={comment.id}
                comment={comment}
                />)
            }
            <Outlet/>
         </div>
    )
}