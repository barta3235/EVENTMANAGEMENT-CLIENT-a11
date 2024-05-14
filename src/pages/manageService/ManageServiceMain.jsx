import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import EachManage from "./EachManage";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ManageServiceMain = () => {

    const { user } = useContext(AuthContext);
    console.log('ss', user);
    const [manageSet, SetManageSet] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/allServices/${user?.email}`,{credentials:'include'})
            .then(res => res.json())
            .then(data => {
                SetManageSet(data);
            })
    }, [user?.email])




    return (
        <div className="mt-[50px]">
            <Helmet>
                <title>Manage Services</title>
            </Helmet>
            <h1 className="mx-[7px] md:mx-[40px] mb-[20px] bg-[#7f1734] w-[100px] p-1 text-center rounded-full text-white font-medium">Services - {manageSet.length}</h1>
            {
                manageSet?.length > 0 ? <div className="mx-[7px] md:mx-[40px] flex flex-col gap-[50px]">
                    {
                        manageSet.map((aManage) => <EachManage key={aManage._id} allManage={manageSet} manage={aManage} setManage={SetManageSet}></EachManage>)
                    }
                </div> : <div className="mx-[7px] mt-[30px] md:mx-[40px] other h-[500px] flex flex-col md:flex-row justify-end pb-14 md:pb-0 md:justify-around gap-4 items-center p-2 md:p-5">
                    <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-semibold bg-black bg-opacity-50 rounded-lg md:w-[400px] p-3">Our services haven't seemed to entice you yet.</h1>
                    <div className="flex flex-col gap-5"><h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-semibold bg-black bg-opacity-50 rounded-lg md:w-[400px] p-3">Explore our latest curated events!</h1><Link to='/allServices' className="text-white text-2xl w-[150px] text-center rounded-md font-medium hover:bg-black bg-black bg-opacity-50">Click here</Link></div>
                </div>
            }
        </div>
    );
};

export default ManageServiceMain;