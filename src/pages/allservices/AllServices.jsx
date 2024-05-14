import { useEffect, useState } from "react";
import IndividualServiceInAllService from "./IndividualServiceInAllService";
import { Helmet } from "react-helmet-async";
import axios from "axios";


const AllServices = () => {

    const [services,setServices]=useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:5000/services`)
        .then(data=>{
            setServices(data.data);
        })
    },[])


    return (
        <div>
            <Helmet>
                <title>Services</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-3">

                {
                    services.map((service) => <IndividualServiceInAllService key={service._id} service={service}></IndividualServiceInAllService>)
                }
            </div>
            <div>

            </div>
        </div>
    );
};

export default AllServices;