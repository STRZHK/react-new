export default function TodoComponent({todo}) {
    return (
        <div>
            <li>{todo.id} - {todo.title}</li>
        </div>
    )
}