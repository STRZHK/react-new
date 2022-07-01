import {UserForm} from "./components/UserForm";
import {UserComment} from "./components/UserComment";

export default function App() {

  return (
    <div>
        <h3>User Form</h3>
      <UserForm/>
      <br/>
      <hr/>
        <br/>
        <h3>Comment submit</h3>
        <UserComment/>
    </div>
  );
}