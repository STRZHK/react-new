import {useEffect} from "react";
import {getUserPost} from "../../services/user.services";

export default function Posts() {
    useEffect(()=>{
        getUserPost()
    }, [])
    return (
        <div>
           
        </div>
    )
}