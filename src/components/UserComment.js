import {useForm} from "react-hook-form";

import {createComment} from "../services/comments.services";

export const UserComment = () => {
    let {register, handleSubmit} = useForm();
    let submit = (item) => {
        createComment(item).then(({data}) => console.log(data))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type='text' {...register("comment")}/>
                <button>Save</button>
            </form>
        </div>
    );
}