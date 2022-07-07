import {useEffect, useState} from "react";

import {getTodos} from "../../services/services";

import TodoComponent from "../../components/TodoComponent";

export default function Todos() {

    let [todos, setTodos] = useState([]);

    useEffect( () => {
        getTodos.then((value)=> setTodos([...value]))
    },[])

    return (
        <div>
            {
                todos.map(todo => <TodoComponent
                    key={todo.id}
                    todo={todo}
                />)
            }
        </div>
    )
}