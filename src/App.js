import {Route, Routes} from "react-router-dom";

import Todos from "./pages/Todos/Todos";
import Albums from "./pages/Albums/Albums";
import Comments from "./pages/Comments/Comments";
import PostComponent from "./components/PostComponent";
import Layout from "./pages/Layout/Layout";


export default function App() {
  return (
    <div>
        <hr/>
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                <Route path={'/todos'} element={<Todos/>}></Route>
                <Route path={'/albums'} element={<Albums/>}></Route>
                <Route path={'/comments'} element={<Comments/>}>
                    <Route path={':postId'} element={<PostComponent/>}></Route>
                </Route>
                </Route>
            </Routes>
        </div>
    </div>
  );
}
