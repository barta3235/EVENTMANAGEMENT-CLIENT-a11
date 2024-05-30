import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from '../components/navbar/Navbar'
const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="h-[68px]">

            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;