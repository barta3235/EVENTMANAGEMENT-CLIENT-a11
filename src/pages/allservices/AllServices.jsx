import { useLoaderData } from "react-router-dom";
import IndividualServiceInAllService from "./IndividualServiceInAllService";


const AllServices = () => {

    const services=useLoaderData();
    

    return (
        <div className="grid grid-cols-1 md:grid-cols-3">
            {
                services.map((service)=><IndividualServiceInAllService key={service._id} service={service}></IndividualServiceInAllService>)   
            }
        </div>
    );
};

export default AllServices;