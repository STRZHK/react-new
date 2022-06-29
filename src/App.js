//TASK 1

// import {useForm} from "react-hook-form";
//
// export default function App() {
//   let {register, handleSubmit} = useForm();
//   let submit = (item) => {
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//       method: 'POST',
//       body: JSON.stringify(item),
//       headers: {'Content-type': 'application/json; charset=UTF-8'},
//     })
//         .then((response) => response.json())
//         .then((json) => console.log(json));  }
//   return (
//     <div>
//       <form onSubmit={handleSubmit(submit)}>
//         <input type='text' {...register("Name", {required:true})}/>
//         <input type='text' {...register("Surname", {required:true})}/>
//         <input type='age' {...register("Age")}/>
//         <button>Save</button>
//       </form>
//     </div>
//   );
// }


//TASK 2 > COMMENTS

import {useForm} from "react-hook-form";

export default function App() {
  let {register, handleSubmit} = useForm();
  let submit = (item) => {
    fetch('http://jsonplaceholder.typicode.com/comments', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {'Content-type': 'application/json; charset=UTF-8'},
    })
        .then((response) => response.json())
        .then((json) => console.log(json));  }
  return (
      <div>
        <form onSubmit={handleSubmit(submit)}>
          <input type='text' {...register("Comment", {required:true})}/>
          <button>Save</button>
        </form>
      </div>
  );
}