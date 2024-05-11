import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="h-[80px]">

            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;