import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import EachManage from "./EachManage";

const ManageServiceMain = () => {

    const { user } = useContext(AuthContext);
    console.log('ss', user);
    const [manageSet, SetManageSet] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/allServices/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                SetManageSet(data);
            })
    }, [user?.email])




    return (
        <div className="mt-[50px]">
            <h1 className="mx-[7px] md:mx-[40px] mb-[20px] bg-[#7f1734] w-[100px] p-1 text-center rounded-full text-white font-medium">Services - {manageSet.length}</h1>
            <div className="mx-[7px] md:mx-[40px] flex flex-col gap-[50px]">
                {
                    manageSet.map((aManage) => <EachManage key={aManage._id} manage={aManage}></EachManage>)
                }
            </div>
        </div>
    );
};

export default ManageServiceMain;