import { Outlet } from "react-router-dom";
import NavBar from "../components/Header/NavBar/NavBar";

const MainLayout = () => {
    return (
        <div>
            <div  className="max-w-[1320px] mx-auto">
            <NavBar></NavBar>
            </div>

            <div>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;