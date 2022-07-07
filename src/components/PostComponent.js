import {useLocation} from "react-router-dom";


export default function PostComponent() {
    let {state} = useLocation()
    return (
        <div>
            {state.id} - {state.body}

        </div>
    )
}