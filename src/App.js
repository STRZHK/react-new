import {Link, Route, Routes} from "react-router-dom";

import Todos from "./pages/Todos/Todos";
import Albums from "./pages/Albums/Albums";
import Comments from "./pages/Comments/Comments";
import PostComponent from "./components/PostComponent";


export default function App() {
  return (
    <div>
        <h2>Navigator</h2>
      <ul>
        <li><Link to={'/todos'}>Todos</Link></li>
        <li><Link to={'/albums'}>Albums</Link></li>
          <li><Link to={'/comments'}>Comments</Link></li>
      </ul>
        <hr/>
        <div>
            <Routes>
                <Route path={'/todos'} element={<Todos/>}></Route>
                <Route path={'/albums'} element={<Albums/>}></Route>
                <Route path={'/comments'} element={<Comments/>}>

                    <Route path={':postId'} element={<PostComponent/>}></Route>

                </Route>
            </Routes>
        </div>
    </div>
  );
}
