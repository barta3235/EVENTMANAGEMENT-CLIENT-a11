import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const ManageServiceMain = () => {

    const {user}=useContext(AuthContext);
    
   

    

    return (
        <div>
            <h1>My service</h1>
        </div>
    );
};

export default ManageServiceMain;