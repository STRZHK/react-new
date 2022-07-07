import {Link, Route, Routes} from "react-router-dom";

import Todos from "./pages/Todos/Todos";
import Albums from "./pages/Albums/Albums";
import Posts from "./pages/Post/Posts";


export default function App() {
  return (
    <div>
        <h2>Navigaror</h2>
      <ul>
        <li><Link to={'/todos'}>Todos</Link></li>
        <li><Link to={'/albums'}>Albums</Link></li>
        {/*<li><Link to={'/comments'}>Comments</Link></li>*/}
          <li><Link to={'/posts'}>Posts</Link></li>
      </ul>
        <hr/>
        <div>
            <Routes>
                <Route path={'/todos'} element={<Todos/>}></Route>
                <Route path={'/albums'} element={<Albums/>}></Route>
                <Route path={'/posts'} element={<Posts/>}></Route>
            </Routes>
        </div>
    </div>
  );
}
