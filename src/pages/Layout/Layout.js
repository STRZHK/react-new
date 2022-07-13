import Header from "../Header/Header";

import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Header/>
            <hr/>
            <Outlet/>
        </div>
    )
}
export default Layout;
