import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({children}) => {

    const {user,loading}=useContext(AuthContext);
    console.log(user)
    const location = useLocation()

    if(loading){
        return <div className="flex justify-center items-center min-h-screen"><span className="loading loading-bars w-[150px] bg-[#7f1734]"></span></div>
    }
    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to='/login' replace></Navigate>

   
};

export default ProtectedRoute;