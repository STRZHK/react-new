export default function PostComponent({post}) {
    return (
        <div>
            {post.id} - {post.title}
        </div>
    )
}