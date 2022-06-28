export default function User({item, getPostId}) {
    return (
        <div>
            <h2>{item.id} - {item.name}</h2>
            <button onClick={()=>{
                getPostId(item.id)
            }}>User's posts</button>
        </div>
    );
}