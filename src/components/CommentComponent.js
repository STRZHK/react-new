import {Link} from "react-router-dom";

export default function CommentComponent({comment}) {

    return (
        <div>
            <li>{comment.body}</li>
            <span><Link to={comment.id.toString()} state={comment}>related post</Link></span>
        </div>
    )
}