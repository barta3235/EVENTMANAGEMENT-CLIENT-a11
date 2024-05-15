import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import EachServiceToDo from "./EachServiceToDo";
import { Link } from "react-router-dom";

const ServiceTodo = () => {

    const { user } = useContext(AuthContext);
    const [bookedDatas, setBookedDatas] = useState([]);
    
    useEffect(() => {
        axios.get(`http://localhost:5000/bookedServicesByProvider/${user?.email}`)
            .then((data) => {
                setBookedDatas(data.data)
            })
    }, [user?.email])

    console.log(bookedDatas.length)

    return (
        <div>
              <h1 className="mx-[5px] md:mx-[15px] mt-[20px] mb-[30px] font-semibold text-2xl ">Registered Services</h1>
            <div>
                {
                    bookedDatas.length > 0 ? bookedDatas.map((eachData) => <EachServiceToDo key={eachData._id} service={eachData} setService={setBookedDatas}></EachServiceToDo>) : <div className="mx-[7px] mt-[30px] md:mx-[40px] other h-[500px] flex flex-col md:flex-row justify-end pb-14 md:pb-0 md:justify-around gap-4 items-center p-2 md:p-5">
                        <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-semibold bg-black bg-opacity-50 rounded-lg md:w-[400px] p-3">Our services haven't seemed to entice you yet.</h1>
                        <div className="flex flex-col gap-5"><h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-semibold bg-black bg-opacity-50 rounded-lg md:w-[400px] p-3">Explore our latest curated events!</h1><Link to='/allServices' className="text-white text-2xl w-[150px] text-center rounded-md font-medium hover:bg-black bg-black bg-opacity-50">Click here</Link></div>
                    </div>
                }
            </div>
        </div>
    );
};

export default ServiceTodo;