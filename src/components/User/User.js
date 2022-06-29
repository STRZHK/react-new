export default function User({item, elevate}) {
    const getPostId = () => {
        elevate(item.id)
    }
    return (
        <div>
            <h2>{item.id} - {item.name}</h2>
            <button onClick={getPostId}>User's posts</button>
        </div>
    );
}