import {useForm} from "react-hook-form";

import {getUser} from "../services/user.services";

export  const UserForm = () => {
    let {register, handleSubmit , formState:{errors}} = useForm(
        {
            Name: 'First Name',
            Surname: 'First Name',
            Age: 'First Name'
        }
    );
    let submit = (obj) => {
        getUser(obj).then(({data}) => console.log(data))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type='text' {...register("Name", {required:true})}/>
                {
                    errors.Name && <span>Field is required</span>
                }
                <br/>
                <input type='text' {...register("Surname", {required:true})}/>
                {
                    errors.Surname && <span>Field is required</span>
                }
                <br/>
                <input type='age' {...register("Age")}/>
                <br/>
                <button>Save</button>
            </form>
        </div>
    );
};